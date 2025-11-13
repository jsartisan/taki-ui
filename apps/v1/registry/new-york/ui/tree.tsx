"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  TreeItemProps as AriaTreeItemProps,
  Button,
  composeRenderProps,
  TreeProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn, focusRing } from "../lib/utils"
import { buttonVariants } from "./button"
import { Checkbox } from "./checkbox"

const itemStyles = tv({
  extend: focusRing,
  base: "group relative flex cursor-default select-none items-center gap-3 rounded-md px-3 py-1 text-sm outline-none transition-colors",
  variants: {
    isSelected: {
      false: "hover:bg-accent hover:text-accent-foreground",
      true: "bg-accent text-accent-foreground",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
  },
})

export function Tree<T extends object>({ children, ...props }: TreeProps<T>) {
  return (
    <AriaTree
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn("relative space-y-0.5 overflow-auto p-1 outline-0", className)
      )}
    >
      {children}
    </AriaTree>
  )
}

const expandButton = tv({
  extend: buttonVariants,
  base: "border-0 p-0 bg-transparent shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-start cursor-default",
  variants: {
    isDisabled: {
      true: "opacity-50",
    },
  },
})

const chevron = tv({
  base: "transition-transform duration-200 ease-in-out",
  variants: {
    isExpanded: {
      true: "transform rotate-90",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
})

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title: string
}

export function TreeItem({ children, title, ...props }: TreeItemProps) {
  return (
    <AriaTreeItem className={itemStyles} textValue={title} {...props}>
      <AriaTreeItemContent>
        {({
          selectionMode,
          selectionBehavior,
          hasChildItems,
          isExpanded,
          isDisabled,
        }) => (
          <div className="flex items-center">
            {selectionMode === "multiple" && selectionBehavior === "toggle" && (
              <Checkbox slot="selection" />
            )}
            <div className="w-[calc(calc(var(--tree-item-level)_-_1)_*_calc(var(--spacing)_*_3))] shrink-0" />
            {hasChildItems ? (
              <Button
                slot="chevron"
                className={expandButton({
                  isDisabled,
                  size: "icon-xs",
                  variant: "ghost",
                })}
              >
                <ChevronRight
                  aria-hidden
                  className={chevron({ isExpanded, isDisabled })}
                />
              </Button>
            ) : (
              <div className="size-7 shrink-0" />
            )}
            {title}
          </div>
        )}
      </AriaTreeItemContent>
      {children}
    </AriaTreeItem>
  )
}
