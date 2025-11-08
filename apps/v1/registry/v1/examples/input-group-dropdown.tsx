import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/v1/ui/input-group"
import { Menu, MenuItem, MenuTrigger } from "@/registry/v1/ui/menu"

export default function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <MenuTrigger>
            <InputGroupButton variant="ghost" aria-label="More" size="icon-xs">
              <MoreHorizontal />
            </InputGroupButton>
            <Menu placement="bottom end">
              <MenuItem>Settings</MenuItem>
              <MenuItem>Copy path</MenuItem>
              <MenuItem>Open location</MenuItem>
            </Menu>
          </MenuTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <MenuTrigger>
            <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
              Search In... <ChevronDownIcon className="size-3" />
            </InputGroupButton>
            <Menu placement="bottom end" className="[--radius:0.95rem]">
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Blog Posts</MenuItem>
              <MenuItem>Changelog</MenuItem>
            </Menu>
          </MenuTrigger>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
