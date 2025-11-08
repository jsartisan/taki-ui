import { Button } from "@/registry/v1/ui/button"
import { ButtonGroup } from "@/registry/v1/ui/button-group"
import { Kbd, KbdGroup } from "@/registry/v1/ui/kbd"
import { Tooltip, TooltipTrigger } from "@/registry/v1/ui/tooltip"

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
