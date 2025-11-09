import { HelpCircle, InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york/ui/input-group"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <TooltipTrigger>
            <InputGroupButton variant="ghost" aria-label="Info" size="icon-xs">
              <InfoIcon />
            </InputGroupButton>
            <Tooltip>Password must be at least 8 characters</Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <TooltipTrigger>
            <InputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
            <Tooltip>We&apos;ll use this to send you notifications</Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
        <TooltipTrigger>
          <InputGroupAddon>
            <InputGroupButton variant="ghost" aria-label="Help" size="icon-xs">
              <HelpCircle />
            </InputGroupButton>
          </InputGroupAddon>
          <Tooltip placement="left">Click for help with API keys</Tooltip>
        </TooltipTrigger>
      </InputGroup>
    </div>
  )
}
