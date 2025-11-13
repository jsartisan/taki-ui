import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function TooltipDelay() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <TooltipTrigger delay={0}>
        <Button variant="outline">No delay</Button>
        <Tooltip>Appears immediately</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger delay={500}>
        <Button variant="outline">500ms delay</Button>
        <Tooltip>Appears after 500ms</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger delay={1000}>
        <Button variant="outline">1000ms delay</Button>
        <Tooltip>Appears after 1 second</Tooltip>
      </TooltipTrigger>
    </div>
  )
}
