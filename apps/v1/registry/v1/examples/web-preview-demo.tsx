"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, RotateCwIcon } from "lucide-react"

import {
  WebPreview,
  WebPreviewBody,
  WebPreviewConsole,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
} from "@/registry/v1/ai-elements/web-preview"

export default function WebPreviewDemo() {
  const [url, setUrl] = useState("https://ai-sdk.dev")
  const [logs] = useState([
    {
      level: "log" as const,
      message: "Page loaded successfully",
      timestamp: new Date(),
    },
    {
      level: "log" as const,
      message: "Ready to display content",
      timestamp: new Date(),
    },
  ])

  return (
    <div className="h-[600px] w-full">
      <WebPreview defaultUrl={url} onUrlChange={setUrl}>
        <WebPreviewNavigation>
          <WebPreviewNavigationButton disabled tooltip="Back">
            <ChevronLeftIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewNavigationButton disabled tooltip="Forward">
            <ChevronRightIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewNavigationButton tooltip="Refresh">
            <RotateCwIcon className="size-4" />
          </WebPreviewNavigationButton>
          <WebPreviewUrl placeholder="Enter URL..." />
        </WebPreviewNavigation>

        <WebPreviewBody src={url} />

        <WebPreviewConsole logs={logs} />
      </WebPreview>
    </div>
  )
}
