import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function DotPattern(props: ComponentProps<"div">) {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        "border-edge gird place-items-center rounded-lg bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[15px_15px] bg-center p-4 [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
        className
      )}
      {...rest}
    />
  )
}
