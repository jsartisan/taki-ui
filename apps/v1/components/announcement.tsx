import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { badgeVariants } from "@/registry/v1/ui/badge"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className={badgeVariants({ variant: "secondary" })}
    >
      <span className="flex size-2 rounded-full bg-blue-500" title="New" />
      AI elements are here! <ArrowRightIcon />
    </Link>
  )
}
