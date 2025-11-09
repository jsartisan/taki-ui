"use client"

import * as React from "react"
import {
  Button as AriaButton,
  Disclosure,
  DisclosurePanel,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DisclosurePanel>) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Disclosure
      isExpanded={expanded}
      onExpandedChange={setExpanded}
      className={cn("group/collapsible relative md:-mx-1", className)}
      {...props}
    >
      {({ isExpanded }) => (
        <>
          <div className="absolute top-1.5 right-9 z-10 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground h-7 rounded-md px-2"
              slot="trigger"
            >
              {expanded ? "Collapse" : "Expand"}
            </Button>
            <Separator orientation="vertical" className="mx-1.5 !h-4" />
          </div>
          <div
            data-expanded={isExpanded ? "true" : "false"}
            className="relative mt-6 block! overflow-hidden data-[expanded=false]:max-h-64 [&>figure]:mt-0 [&>figure]:md:!mx-0"
          >
            {children}
          </div>
          <AriaButton
            slot="trigger"
            data-expanded={isExpanded ? "true" : "false"}
            className="from-code/70 to-code text-muted-foreground absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center rounded-b-lg bg-gradient-to-b text-sm group-data-[expanded=true]/collapsible:hidden"
          >
            {expanded ? "Collapse" : "Expand"}
          </AriaButton>
        </>
      )}
    </Disclosure>
  )
}
