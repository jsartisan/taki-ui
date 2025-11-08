"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { FileTrigger } from "@/registry/new-york-v4/ui/file-trigger"

export default function FileTriggerMultiple() {
  const [files, setFiles] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-4">
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          const fileList = e ? Array.from(e) : []
          const filenames = fileList.map((file) => file.name)
          setFiles(filenames)
        }}
      >
        <Button variant="outline">Select multiple files</Button>
      </FileTrigger>
      {files.length > 0 && (
        <div className="text-muted-foreground text-sm">
          <p className="font-medium">Selected files ({files.length}):</p>
          <ul className="mt-2 space-y-1">
            {files.map((file, index) => (
              <li key={index} className="truncate">
                {file}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
