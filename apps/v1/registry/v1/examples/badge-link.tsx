import Link from "next/link"

import { badgeVariants } from "@/registry/v1/ui/badge"

export default function BadgeLinkDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="#" className={badgeVariants({ variant: "default" })}>
        Default Link
      </Link>
      <Link href="#" className={badgeVariants({ variant: "secondary" })}>
        Secondary Link
      </Link>
      <Link href="#" className={badgeVariants({ variant: "outline" })}>
        Outline Link
      </Link>
      <Link href="#" className={badgeVariants({ variant: "destructive" })}>
        Destructive Link
      </Link>
    </div>
  )
}
