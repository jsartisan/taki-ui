import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <MenuTrigger>
        <Button
          variant="ghost"
          size="sm"
          className="data-[state=open]:bg-accent -ml-3 h-8"
        >
          <span>{title}</span>
          {column.getIsSorted() === "desc" ? (
            <ArrowDown />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUp />
          ) : (
            <ChevronsUpDown />
          )}
        </Button>
        <Menu placement="bottom start">
          <MenuItem onAction={() => column.toggleSorting(false)}>
            <ArrowUp />
            Asc
          </MenuItem>
          <MenuItem onAction={() => column.toggleSorting(true)}>
            <ArrowDown />
            Desc
          </MenuItem>
          <MenuSeparator />
          <MenuItem onAction={() => column.toggleVisibility(false)}>
            <EyeOff />
            Hide
          </MenuItem>
        </Menu>
      </MenuTrigger>
    </div>
  )
}
