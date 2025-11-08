"use client"

import * as React from "react"
import {
  composeRenderProps,
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { focusRing } from "../lib/utils"

const tabsStyles = tv({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row",
    },
  },
})

function Tabs(props: TabsProps) {
  return (
    <RACTabs
      data-slot="tabs"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className })
      )}
    />
  )
}

const tabListStyles = tv({
  base: "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start h-auto",
    },
  },
})

function TabsList<T extends object>(props: TabListProps<T>) {
  return (
    <RACTabList
      data-slot="tabs-list"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className })
      )}
    />
  )
}

const tabTriggerStyles = tv({
  extend: focusRing,
  base: [
    "text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    isSelected: {
      true: [
        "bg-background dark:text-foreground dark:border-input dark:bg-input/30",
      ],
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
})

function TabsTrigger(props: TabProps) {
  return (
    <RACTab
      data-slot="tabs-trigger"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabTriggerStyles({ ...renderProps, className })
      )}
    />
  )
}

const tabPanelStyles = tv({
  extend: focusRing,
  base: "flex-1 outline-none",
})

function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      data-slot="tabs-content"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className })
      )}
    />
  )
}

// Export both naming conventions for compatibility
export { Tabs, TabsList, TabsTrigger, TabPanel }
export { TabPanel as TabsContent }
