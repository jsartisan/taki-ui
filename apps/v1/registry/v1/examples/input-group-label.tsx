import { InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/v1/ui/input-group"
import { Label } from "@/registry/v1/ui/label"
import { Tooltip, TooltipTrigger } from "@/registry/v1/ui/tooltip"

export default function InputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" className="text-foreground">
            Email
          </Label>
          <TooltipTrigger>
            <InputGroupButton
              variant="ghost"
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
            >
              <InfoIcon />
            </InputGroupButton>
            <Tooltip>We&apos;ll use this to send you notifications</Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
