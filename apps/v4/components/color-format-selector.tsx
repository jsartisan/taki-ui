"use client"

import * as React from "react"

import { getColorFormat, type Color } from "@/lib/colors"
import { cn } from "@/lib/utils"
import { useColors } from "@/hooks/use-colors"
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export function ColorFormatSelector({
  color,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  color: Color
}) {
  const { format, setFormat, isLoading } = useColors()
  const formats = React.useMemo(() => getColorFormat(color), [color])

  if (isLoading) {
    return <ColorFormatSelectorSkeleton />
  }

  return (
    <Select
      selectedKey={format}
      onSelectionChange={(key) => setFormat(key as string)}
      size="sm"
      className={cn("min-w-[200px]", className)}
      {...props}
    >
      {Object.entries(formats).map(([format, value]) => (
        <SelectItem key={format} id={format}>
          <span className="font-medium">{format}</span>
          <span className="text-muted-foreground font-mono text-xs ml-2">
            {value}
          </span>
        </SelectItem>
      ))}
    </Select>
  )
}

export function ColorFormatSelectorSkeleton({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <Skeleton
      className={cn("h-8 w-[132px] gap-1.5 rounded-md", className)}
      {...props}
    />
  )
}
