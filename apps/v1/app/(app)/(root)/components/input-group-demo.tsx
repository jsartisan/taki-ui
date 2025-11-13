import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon, Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/new-york/ui/input-group"
import { Menu, MenuItem, MenuTrigger } from "@/registry/new-york/ui/menu"
import { Separator } from "@/registry/new-york/ui/separator"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="!pl-1" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <TooltipTrigger>
            <InputGroupButton
              className="rounded-full"
              size="icon-xs"
              aria-label="Info"
            >
              <IconInfoCircle />
            </InputGroupButton>
            <Tooltip>This is content in a tooltip.</Tooltip>
          </TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
            aria-label="Add"
          >
            <IconPlus />
          </InputGroupButton>
          <MenuTrigger>
            <InputGroupButton variant="ghost">Auto</InputGroupButton>
            <Menu placement="top start" className="[--radius:0.95rem]">
              <MenuItem>Auto</MenuItem>
              <MenuItem>Agent</MenuItem>
              <MenuItem>Manual</MenuItem>
            </Menu>
          </MenuTrigger>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="bg-primary text-foreground flex size-4 items-center justify-center rounded-full">
            <IconCheck className="size-3 text-white" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
