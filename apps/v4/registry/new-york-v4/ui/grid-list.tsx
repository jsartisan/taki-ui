"use client"

import React from "react"
import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  GridListProps as AriaGridListProps,
  composeRenderProps,
  GridListItemProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { focusRing } from "../lib/utils"

const gridListStyles = tv({
  base: "flex flex-col gap-0.5 overflow-auto rounded-lg border bg-background p-1 outline-none",
  variants: {
    isFocusVisible: {
      true: "ring-2 ring-ring ring-offset-2 ring-offset-background",
    },
  },
})

export interface GridListProps<T>
  extends Omit<AriaGridListProps<T>, "children" | "className">,
    React.PropsWithChildren {
  className?: string
}

export function GridList<T extends object>({
  children,
  className,
  ...props
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        gridListStyles({ ...renderProps, className })
      )}
    >
      {children}
    </AriaGridList>
  )
}

const gridListItemStyles = tv({
  extend: focusRing,
  base: "group relative flex cursor-default select-none items-center gap-3 rounded-md px-3 py-2 text-sm outline-none transition-colors",
  variants: {
    isSelected: {
      false: "hover:bg-accent hover:text-accent-foreground",
      true: "bg-accent text-accent-foreground",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
    isFocusVisible: {
      true: "ring-2 ring-ring ring-offset-1",
    },
  },
})

export function GridListItem(props: GridListItemProps) {
  return (
    <AriaGridListItem
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        gridListItemStyles({ ...renderProps, className })
      )}
    />
  )
}
