import { Badge } from "@/registry/new-york/ui/badge"
import { Spinner } from "@/registry/new-york/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Loading
      </Badge>
    </div>
  )
}
