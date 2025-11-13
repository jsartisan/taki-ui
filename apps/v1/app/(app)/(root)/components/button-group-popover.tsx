import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { ButtonGroup } from "@/registry/new-york/ui/button-group"
import { DialogTrigger } from "@/registry/new-york/ui/dialog"
import { Popover } from "@/registry/new-york/ui/popover"
import { Separator } from "@/registry/new-york/ui/separator"
import { Textarea } from "@/registry/new-york/ui/textarea"

export function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <BotIcon /> Copilot
      </Button>
      <DialogTrigger>
        <Button variant="outline" size="icon-sm" aria-label="Open Popover">
          <ChevronDownIcon />
        </Button>
        <Popover>
          <div className="px-4 py-3">
            <div className="text-sm font-medium">Agent Tasks</div>
          </div>
          <Separator />
          <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
            <Textarea
              placeholder="Describe your task in natural language."
              className="mb-4 resize-none"
            />
            <p className="font-medium">Start a new task with Copilot</p>
            <p className="text-muted-foreground">
              Describe your task in natural language. Copilot will work in the
              background and open a pull request for your review.
            </p>
          </div>
        </Popover>
      </DialogTrigger>
    </ButtonGroup>
  )
}
