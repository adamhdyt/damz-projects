"use client"

import { Fragment, useState } from "react"
import { Check, Copy } from "lucide-react"

const KEYWORDS = new Set([
  "select", "from", "where", "and", "or", "not", "in", "is", "null", "as",
  "join", "left", "right", "inner", "outer", "on", "group", "by", "order",
  "having", "distinct", "union", "all", "insert", "into", "values", "update",
  "set", "delete", "create", "alter", "drop", "table", "view", "index",
  "sequence", "trigger", "procedure", "function", "package", "body", "begin",
  "end", "declare", "loop", "for", "while", "if", "then", "else", "elsif",
  "exit", "when", "return", "cursor", "open", "fetch", "close", "commit",
  "rollback", "grant", "revoke", "constraint", "primary", "key", "foreign",
  "references", "default", "check", "unique", "add", "modify", "rename",
  "column", "tablespace", "exception", "raise", "between", "like", "exists",
  "case", "desc", "asc", "with", "connect", "start", "level", "partition",
  "over", "using", "merge", "matched", "dbms_output", "put_line", "replace",
])

const TYPES = new Set([
  "number", "varchar2", "varchar", "char", "date", "timestamp", "clob",
  "blob", "integer", "int", "float", "boolean", "long", "raw", "nchar",
  "nvarchar2", "pls_integer", "binary_integer",
])

type Token = { text: string; type: string }

function tokenizeSql(code: string): Token[] {
  const tokens: Token[] = []
  const re =
    /(--[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^']|'')*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_$#]*)|(\s+)|([^\w\s])/g
  let m: RegExpExecArray | null
  while ((m = re.exec(code)) !== null) {
    if (m[1]) tokens.push({ text: m[1], type: "comment" })
    else if (m[2]) tokens.push({ text: m[2], type: "string" })
    else if (m[3]) tokens.push({ text: m[3], type: "number" })
    else if (m[4]) {
      const lower = m[4].toLowerCase()
      if (KEYWORDS.has(lower)) tokens.push({ text: m[4], type: "keyword" })
      else if (TYPES.has(lower)) tokens.push({ text: m[4], type: "type" })
      else tokens.push({ text: m[4], type: "ident" })
    } else if (m[5]) tokens.push({ text: m[5], type: "space" })
    else tokens.push({ text: m[6], type: "punct" })
  }
  return tokens
}

const colorFor: Record<string, string> = {
  comment: "text-muted-foreground italic",
  string: "text-chart-3",
  number: "text-chart-4",
  keyword: "text-primary font-medium",
  type: "text-chart-2",
  punct: "text-muted-foreground",
  ident: "text-foreground",
  space: "",
}

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const tokens = tokenizeSql(code)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-secondary/50">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        {copied ? (
          <>
            <Check className="size-3.5 text-chart-3" />
            Copied
          </>
        ) : (
          <>
            <Copy className="size-3.5" />
            Copy
          </>
        )}
      </button>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono">
          {tokens.map((t, i) => (
            <Fragment key={i}>
              {t.type === "space" ? (
                t.text
              ) : (
                <span className={colorFor[t.type]}>{t.text}</span>
              )}
            </Fragment>
          ))}
        </code>
      </pre>
    </div>
  )
}
