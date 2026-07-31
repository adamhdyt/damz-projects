import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Adam Hidayat",
  description: "Get in touch with Adam Hidayat.",
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Contact</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
        <p>
          Have a question, feedback, or a business inquiry? I'd love to hear from you.
        </p>
        <p>
          The best way to reach me is via email. Please send your inquiries to:
        </p>
        <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md inline-block">
          <strong>contact@adamhidayat.com</strong>
        </div>
        <p>
          I strive to respond to all legitimate inquiries within 48 hours. Thank you for your interest!
        </p>
      </div>
    </div>
  )
}
