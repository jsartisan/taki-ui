"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { SubmenuTrigger } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm leading-none font-medium">
        <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
          {label}
        </span>
        <span className="text-muted-foreground">Create a new project</span>
      </p>
      <MenuTrigger isOpen={open} onOpenChange={setOpen}>
        <Button variant="ghost" size="sm">
          <MoreHorizontal />
        </Button>
        <Menu placement="bottom end" className="w-[200px]">
          <MenuItem>Assign to...</MenuItem>
          <MenuItem>Set due date...</MenuItem>
          <MenuSeparator />
          <SubmenuTrigger>
            <MenuItem>Apply label</MenuItem>
            <Menu className="p-0">
              <Command>
                <CommandInput
                  placeholder="Filter label..."
                  autoFocus={true}
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No label found.</CommandEmpty>
                  <CommandGroup>
                    {labels.map((labelItem) => (
                      <CommandItem
                        key={labelItem}
                        value={labelItem}
                        onSelect={(value) => {
                          setLabel(value)
                          setOpen(false)
                        }}
                      >
                        {labelItem}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </Menu>
          </SubmenuTrigger>
          <MenuSeparator />
          <MenuItem className="text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive">
            Delete
          </MenuItem>
        </Menu>
      </MenuTrigger>
    </div>
  )
}
