import { BadgeLink } from "@/registry/new-york/ui/badge"

export default function BadgeLinkDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <BadgeLink href="#" variant="default">
        Default Link
      </BadgeLink>
      <BadgeLink href="#" variant="secondary">
        Secondary Link
      </BadgeLink>
      <BadgeLink href="#" variant="outline">
        Outline Link
      </BadgeLink>
      <BadgeLink href="#" variant="destructive">
        Destructive Link
      </BadgeLink>
    </div>
  )
}
