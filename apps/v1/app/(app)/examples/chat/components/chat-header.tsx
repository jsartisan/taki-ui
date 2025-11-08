"use client"

import { ArchiveIcon, EllipsisIcon, FlagIcon, TrashIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"

export function ChatHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <Select defaultValue="gpt-4" variant="ghost">
        <SelectItem id="gpt-4">GPT-4</SelectItem>
        <SelectItem id="gpt-4o">GPT-4o</SelectItem>
        <SelectItem id="llama-3">Llama 3</SelectItem>
      </Select>
      <MenuTrigger>
        <Button variant="ghost" size="icon-sm">
          <EllipsisIcon />
        </Button>
        <Menu placement="bottom end" className="w-56">
          <MenuItem onAction={() => console.log("Archive")}>
            <ArchiveIcon className="mr-2 size-4" />
            Archive
          </MenuItem>
          <MenuItem onAction={() => console.log("Report")}>
            <FlagIcon className="mr-2 size-4" />
            Report
          </MenuItem>
          <MenuSeparator />
          <MenuItem
            onAction={() => console.log("Delete")}
            className="text-destructive focus:text-destructive"
          >
            <TrashIcon className="mr-2 size-4" />
            Delete
          </MenuItem>
        </Menu>
      </MenuTrigger>
    </header>
  )
}
