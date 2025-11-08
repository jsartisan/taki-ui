import { Button } from "@/registry/v1/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/v1/ui/tooltip"

export default function TooltipPlacement() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <TooltipTrigger>
        <Button variant="outline">Top</Button>
        <Tooltip placement="top">Tooltip on top</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button variant="outline">Bottom</Button>
        <Tooltip placement="bottom">Tooltip on bottom</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button variant="outline">Left</Button>
        <Tooltip placement="left">Tooltip on left</Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button variant="outline">Right</Button>
        <Tooltip placement="right">Tooltip on right</Tooltip>
      </TooltipTrigger>
    </div>
  )
}
