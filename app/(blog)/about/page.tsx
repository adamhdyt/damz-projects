import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Adam Hidayat",
  description: "About Adam Hidayat, Database Administrator and author of this blog.",
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">About Me</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
        <p>
          Hello! I'm Adam Hidayat, an experienced Database Administrator specializing in Oracle, SQL Server, PostgreSQL, and MySQL. 
        </p>
        <p>
          I started this blog as a space to share my tech notes, database performance optimization scripts, and various reflections on life. Over the years, I've gathered a wealth of knowledge dealing with complex database architectures, and I wanted a centralized place to document my findings and help others facing similar technical challenges.
        </p>
        <p>
          When I'm not tuning queries or managing database backups, you'll find me exploring new technologies, reading, or writing down my thoughts on everyday life.
        </p>
        <p>
          Thank you for visiting my blog. I hope you find the content here useful!
        </p>
      </div>
    </div>
  )
}
