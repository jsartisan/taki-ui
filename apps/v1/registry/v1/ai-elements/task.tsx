"use client"

import type { ComponentProps } from "react"
import { useContext } from "react"
import { ChevronDownIcon, ChevronRightIcon, SearchIcon } from "lucide-react"
import { Button, DisclosureStateContext } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Disclosure, DisclosurePanel } from "@/registry/v1/ui/disclosure"

export type TaskItemFileProps = ComponentProps<"div">

export const TaskItemFile = ({
  children,
  className,
  ...props
}: TaskItemFileProps) => (
  <div
    className={cn(
      "bg-secondary text-foreground inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-xs",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export type TaskItemProps = ComponentProps<"div">

export const TaskItem = ({ children, className, ...props }: TaskItemProps) => (
  <div className={cn("text-muted-foreground text-sm", className)} {...props}>
    {children}
  </div>
)

export type TaskProps = ComponentProps<typeof Disclosure>

export const Task = ({
  defaultOpen = true,
  className,
  ...props
}: TaskProps) => (
  <Disclosure className={cn(className)} defaultOpen={defaultOpen} {...props} />
)

export type TaskTriggerProps = ComponentProps<typeof DisclosureHeader> & {
  title: string
  icon?: ComponentProps<"svg">
}

export const TaskTrigger = ({
  children,
  className,
  title,
  icon: Icon = SearchIcon,
  ...props
}: TaskTriggerProps) => {
  const state = useContext(DisclosureStateContext)

  return (
    <Button slot="trigger" className={cn("group", className)} {...props}>
      {children ?? (
        <div className="text-muted-foreground hover:text-foreground flex w-full cursor-pointer items-center gap-2 text-sm transition-colors">
          <div className="group relative">
            <ChevronRightIcon
              aria-hidden
              className={cn(
                "absolute top-0 left-0 size-4 transition-opacity group-hover:opacity-100",
                state?.isExpanded ? "rotate-90" : "opacity-0"
              )}
            />
            <Icon
              className={cn(
                "size-4 transition-transform group-hover:scale-0",
                state?.isExpanded ? "scale-0" : ""
              )}
            />
          </div>
          <p className="text-sm">{title}</p>
        </div>
      )}
    </Button>
  )
}

export type TaskContentProps = ComponentProps<typeof DisclosurePanel>

export const TaskContent = ({
  children,
  className,
  ...props
}: TaskContentProps) => (
  <DisclosurePanel
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in outline-none",
      className
    )}
    {...props}
  >
    <div className="border-muted mt-2 space-y-2 border-l-2 pl-4">
      {children}
    </div>
  </DisclosurePanel>
)
