"use client"

import { Table, VisibilityState } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function DataTableViewOptions<TData>({
  table,
}: {
  table: Table<TData>
}) {
  const columnVisibility = table.getState().columnVisibility

  return (
    <MenuTrigger>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
      >
        <Settings2 />
        View
      </Button>
      <Menu
        placement="bottom end"
        className="w-[150px]"
        selectionMode="multiple"
        selectedKeys={Object.keys(columnVisibility).filter(
          (key) => columnVisibility[key]
        )}
        onSelectionChange={(keys) => {
          const newVisibility: VisibilityState = {}
          table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .forEach((column) => {
              newVisibility[column.id] = Array.from(keys).includes(column.id)
            })
          table.setColumnVisibility(newVisibility)
        }}
      >
        <MenuSection title="Toggle columns">
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )
            .map((column) => {
              return (
                <MenuItem key={column.id} id={column.id} className="capitalize">
                  {column.id}
                </MenuItem>
              )
            })}
        </MenuSection>
      </Menu>
    </MenuTrigger>
  )
}
