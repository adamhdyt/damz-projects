"use client"

import { useMemo, useState } from "react"
import { Database, Search } from "lucide-react"
import { CodeBlock } from "@/components/blog/code-block"
import { cn } from "@/lib/utils"

type Script = {
  id: string
  title: string
  description: string
  category: string
  code: string
}

const scripts: Script[] = [
  {
    id: "top-sql",
    title: "Top SQL by CPU time",
    description:
      "Find the most CPU-intensive statements in the shared pool — the usual first stop when the database feels slow.",
    category: "Performance",
    code: `SELECT sql_id,
       ROUND(cpu_time / 1e6, 2) AS cpu_seconds,
       executions,
       ROUND(elapsed_time / 1e6, 2) AS elapsed_seconds,
       SUBSTR(sql_text, 1, 80) AS sql_preview
FROM   v$sqlarea
ORDER  BY cpu_time DESC
FETCH FIRST 10 ROWS ONLY;`,
  },
  {
    id: "tablespace-usage",
    title: "Tablespace free space",
    description:
      "Report used vs. free space per tablespace so you can catch a full datafile before it pages you at 3 a.m.",
    category: "Monitoring",
    code: `SELECT df.tablespace_name,
       ROUND(df.total_mb, 1) AS total_mb,
       ROUND(df.total_mb - fs.free_mb, 1) AS used_mb,
       ROUND(fs.free_mb, 1) AS free_mb,
       ROUND((df.total_mb - fs.free_mb) / df.total_mb * 100, 1) AS pct_used
FROM   (SELECT tablespace_name, SUM(bytes) / 1024 / 1024 total_mb
        FROM   dba_data_files
        GROUP  BY tablespace_name) df
JOIN   (SELECT tablespace_name, SUM(bytes) / 1024 / 1024 free_mb
        FROM   dba_free_space
        GROUP  BY tablespace_name) fs
  ON   df.tablespace_name = fs.tablespace_name
ORDER  BY pct_used DESC;`,
  },
  {
    id: "blocking-sessions",
    title: "Find blocking sessions",
    description:
      "List sessions that are blocking others, including the blocker and waiter SIDs. Great for diagnosing lock contention.",
    category: "Monitoring",
    code: `SELECT s.blocking_session AS blocker_sid,
       s.sid              AS waiter_sid,
       s.username,
       s.event,
       s.seconds_in_wait
FROM   v$session s
WHERE  s.blocking_session IS NOT NULL
ORDER  BY s.seconds_in_wait DESC;`,
  },
  {
    id: "rebuild-indexes",
    title: "Generate index rebuild statements",
    description:
      "Produce ALTER INDEX ... REBUILD ONLINE commands for a schema. Review the output before running it.",
    category: "Maintenance",
    code: `SELECT 'ALTER INDEX ' || index_name || ' REBUILD ONLINE;' AS ddl
FROM   user_indexes
WHERE  index_type = 'NORMAL'
  AND  status = 'VALID'
ORDER  BY index_name;`,
  },
  {
    id: "gather-stats",
    title: "Gather schema statistics",
    description:
      "Refresh optimizer statistics for a whole schema so the cost-based optimizer makes good plan choices.",
    category: "Maintenance",
    code: `BEGIN
  DBMS_STATS.GATHER_SCHEMA_STATS(
    ownname          => 'APP_OWNER',
    estimate_percent => DBMS_STATS.AUTO_SAMPLE_SIZE,
    cascade          => TRUE,
    degree           => 4
  );
END;
/`,
  },
  {
    id: "audit-logins",
    title: "PL/SQL: log failed logins",
    description:
      "A simple procedure that records failed login attempts into an audit table for a lightweight security trail.",
    category: "PL/SQL",
    code: `CREATE OR REPLACE PROCEDURE log_failed_login (
  p_username IN VARCHAR2,
  p_ip       IN VARCHAR2
) AS
BEGIN
  INSERT INTO login_audit (username, ip_address, attempted_at, status)
  VALUES (p_username, p_ip, SYSTIMESTAMP, 'FAILED');
  COMMIT;
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    RAISE;
END log_failed_login;
/`,
  },
  {
    id: "expdp-backup",
    title: "Data Pump export (schema backup)",
    description:
      "A Data Pump command to export a single schema. Run from the OS shell with a configured directory object.",
    category: "Backup",
    code: `-- Create the directory object once (as a privileged user):
CREATE OR REPLACE DIRECTORY dp_dir AS '/u01/backups';
GRANT READ, WRITE ON DIRECTORY dp_dir TO app_owner;

-- Then export from the shell:
-- expdp app_owner/password \\
--   schemas=APP_OWNER \\
--   directory=dp_dir \\
--   dumpfile=app_owner_%U.dmp \\
--   logfile=app_owner_exp.log`,
  },
]

const categories = ["All", ...Array.from(new Set(scripts.map((s) => s.category)))]

export function OracleScripts() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return scripts.filter((s) => {
      const matchesCategory = category === "All" || s.category === category
      const matchesQuery =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
        <Database className="size-3.5" />
        Databases
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        My Oracle Database Script Vault
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        A living collection of the Oracle SQL and PL/SQL I reach for again and
        again. Everything is searchable, grouped by task, and copy-ready. Use it
        as a reference — always review a script against your own environment
        before running it in production.
      </p>

      {/* Controls */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scripts by name, keyword, or SQL..."
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                category === cat
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Scripts */}
      <div className="mt-8 space-y-8">
        {filtered.map((s) => (
          <section key={s.id} aria-labelledby={`script-${s.id}`}>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                {s.category}
              </span>
            </div>
            <h2
              id={`script-${s.id}`}
              className="mt-2 text-lg font-semibold text-foreground"
            >
              {s.title}
            </h2>
            <p className="mb-3 mt-1 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
            <CodeBlock code={s.code} />
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="rounded-lg border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
            No scripts match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        {filtered.length} of {scripts.length} scripts shown.
      </p>
    </div>
  )
}
