"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york/ui/button"
import { FileTrigger } from "@/registry/new-york/ui/file-trigger"

export default function FileTriggerDemo() {
  const [file, setFile] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <FileTrigger
        onSelect={(e) => {
          const files = e ? Array.from(e) : []
          const filenames = files.map((file) => file.name)
          setFile(filenames[0] || null)
        }}
      >
        <Button variant="outline">Select a file</Button>
      </FileTrigger>
      {file && (
        <p className="text-muted-foreground text-sm">Selected: {file}</p>
      )}
    </div>
  )
}
