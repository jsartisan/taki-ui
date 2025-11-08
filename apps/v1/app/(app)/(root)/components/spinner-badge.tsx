import { Badge } from "@/registry/v1/ui/badge"
import { Spinner } from "@/registry/v1/ui/spinner"

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
