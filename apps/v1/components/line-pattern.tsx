import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function LinePattern(props: ComponentProps<"div">) {
  const { className, ...rest } = props
  return (
    <div
      className={cn(
        "flex grow items-end bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56",
        className
      )}
      {...rest}
    />
  )
}
