import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <div className={cn("my-6 p-4 bg-sidebar/50 rounded-lg border border-border/50 flex gap-3 text-sm text-muted-foreground items-start", className)}>
      <Info className="size-5 shrink-0 mt-0.5 text-primary" />
      <p>
        <strong>Disclosure:</strong> Artikel ini mungkin berisi tautan afiliasi. Jika Anda melakukan pembelian melalui tautan tersebut, saya dapat menerima komisi kecil tanpa biaya tambahan bagi Anda. Dukungan Anda membantu saya untuk terus menulis konten gratis ini.
      </p>
    </div>
  )
}
