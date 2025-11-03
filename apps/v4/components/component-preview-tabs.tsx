"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  const [tab, setTab] = React.useState("preview")

  return (
    <div
      className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <Tabs
        className="relative mr-auto w-full"
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <div className="flex items-center justify-between">
          {!hideCode && (
            <TabsList className="bg-transparent">
              <TabsTrigger
                id="preview"
                className="data-[selected=true]:bg-secondary shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                id="code"
                className="data-[selected=true]:bg-secondary shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
      </Tabs>
      <div
        data-tab={tab}
        data-chrome-less-on-mobile={chromeLessOnMobile}
        className="data-[tab=code]:border-code relative rounded-lg border data-[chrome-less-on-mobile=true]:border-0 sm:data-[chrome-less-on-mobile=true]:border md:-mx-1"
      >
        <div
          data-slot="preview"
          data-active={tab === "preview"}
          className="invisible data-[active=true]:visible"
        >
          <div
            data-align={align}
            className={cn(
              "preview mx-auto grid w-full place-items-center overflow-auto data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
              chromeLessOnMobile ? "sm:p-10" : "h-[450px] p-10"
            )}
          >
            {component}
          </div>
        </div>
        <div
          data-slot="code"
          data-active={tab === "code"}
          className="code absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:!m-0 **:[pre]:h-[450px]"
        >
          {source}
        </div>
      </div>
    </div>
  )
}
