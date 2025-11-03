"use client"

import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { SubmenuTrigger } from "react-aria-components"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"

import { labels } from "../data/data"
import { taskSchema } from "../data/schema"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original)

  return (
    <MenuTrigger>
      <Button
        variant="ghost"
        size="icon"
        className="data-[state=open]:bg-muted size-8"
      >
        <MoreHorizontal />
        <span className="sr-only">Open menu</span>
      </Button>
      <Menu placement="bottom end" className="w-[160px]">
        <MenuItem onAction={() => console.log("Edit")}>Edit</MenuItem>
        <MenuItem onAction={() => console.log("Make a copy")}>
          Make a copy
        </MenuItem>
        <MenuItem onAction={() => console.log("Favorite")}>Favorite</MenuItem>
        <MenuSeparator />
        <SubmenuTrigger>
          <MenuItem>Labels</MenuItem>
          <Menu
            className="w-[160px]"
            selectionMode="single"
            selectedKeys={[task.label]}
            onSelectionChange={(keys) => {
              console.log("Selected label:", Array.from(keys)[0])
            }}
          >
            {labels.map((label) => (
              <MenuItem key={label.value} id={label.value}>
                {label.label}
              </MenuItem>
            ))}
          </Menu>
        </SubmenuTrigger>
        <MenuSeparator />
        <MenuItem
          className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
          onAction={() => console.log("Delete")}
        >
          Delete
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⌘⌫
          </span>
        </MenuItem>
      </Menu>
    </MenuTrigger>
  )
}
