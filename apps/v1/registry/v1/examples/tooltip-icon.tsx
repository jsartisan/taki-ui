import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york-v4/ui/tooltip"

export default function TooltipIcon() {
  return (
    <TooltipTrigger>
      <Button size="icon" variant="outline" aria-label="Information">
        <InfoIcon className="size-4" />
      </Button>
      <Tooltip>Get more information</Tooltip>
    </TooltipTrigger>
  )
}
