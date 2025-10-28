import { Button } from "@/registry/new-york-v4/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york-v4/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover</Button>
      <Tooltip>Add to library</Tooltip>
    </TooltipTrigger>
  )
}
