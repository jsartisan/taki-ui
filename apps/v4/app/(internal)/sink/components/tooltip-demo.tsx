import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york-v4/ui/tooltip"

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <TooltipTrigger>
        <Button variant="outline">Hover</Button>
        <Tooltip>Add to library</Tooltip>
      </TooltipTrigger>
      <div className="flex gap-2">
        {(
          [
            { side: "top", label: "Top" },
            { side: "right", label: "Right" },
            { side: "bottom", label: "Bottom" },
            { side: "left", label: "Left" },
          ] as const
        ).map(({ side, label }) => (
          <TooltipTrigger key={side}>
            <Button variant="outline" className="capitalize">
              {label}
            </Button>
            <Tooltip placement={side}>Add to library</Tooltip>
          </TooltipTrigger>
        ))}
      </div>
      <TooltipTrigger>
        <Button variant="ghost" size="icon">
          <InfoIcon />
          <span className="sr-only">Info</span>
        </Button>
        <Tooltip>
          To learn more about how this works, check out the docs. If you have
          any questions, please reach out to us.
        </Tooltip>
      </TooltipTrigger>
    </div>
  )
}
