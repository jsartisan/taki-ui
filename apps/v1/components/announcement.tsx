import { ArrowRightIcon } from "lucide-react"

import { BadgeLink } from "@/registry/new-york/ui/badge"

export function Announcement() {
  return (
    <BadgeLink href="/docs/changelog" variant="secondary">
      <span className="flex size-2 rounded-full bg-blue-500" title="New" />
      AI elements are here! <ArrowRightIcon />
    </BadgeLink>
  )
}
