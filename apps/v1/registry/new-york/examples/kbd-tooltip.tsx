import { Button } from "@/registry/new-york/ui/button"
import { ButtonGroup } from "@/registry/new-york/ui/button-group"
import { Kbd, KbdGroup } from "@/registry/new-york/ui/kbd"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <TooltipTrigger>
          <Button size="sm" variant="outline">
            Save
          </Button>
          <Tooltip>
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button size="sm" variant="outline">
            Print
          </Button>
          <Tooltip>
            <div className="flex items-center gap-2">
              Print Document{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </Tooltip>
        </TooltipTrigger>
      </ButtonGroup>
    </div>
  )
}
