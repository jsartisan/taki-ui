"use client"

import type { ComponentProps } from "react"
import { composeRenderProps } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/registry/new-york-v4/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york-v4/ui/tooltip"

export type ActionsProps = ComponentProps<"div">

export const Actions = ({ className, children, ...props }: ActionsProps) => (
  <div className={cn("flex items-center gap-1", className)} {...props}>
    {children}
  </div>
)

export type ActionProps = ButtonProps & {
  tooltip?: string
  label?: string
}

export const Action = ({
  tooltip,
  children,
  label,
  className,
  variant = "ghost",
  size = "sm",
  ...props
}: ActionProps) => {
  if (tooltip) {
    return (
      <TooltipTrigger>
        <Button
          className={cn(
            "text-muted-foreground hover:text-foreground relative size-9 p-1.5",
            className
          )}
          size={size}
          type="button"
          variant={variant}
          {...props}
        >
          {composeRenderProps(children, (children) => (
            <>
              {children}
              <span className="sr-only">{label || tooltip}</span>
            </>
          ))}
        </Button>
        <Tooltip>{tooltip}</Tooltip>
      </TooltipTrigger>
    )
  }

  return (
    <Button
      className={cn(
        "text-muted-foreground hover:text-foreground relative size-9 p-1.5",
        className
      )}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <span className="sr-only">{label || tooltip}</span>
        </>
      ))}
    </Button>
  )
}
