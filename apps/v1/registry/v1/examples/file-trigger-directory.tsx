"use client"

import { useState } from "react"
import { FolderIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { FileTrigger } from "@/registry/new-york-v4/ui/file-trigger"

export default function FileTriggerDirectory() {
  const [files, setFiles] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-4">
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            const fileList = Array.from(e).map((file) =>
              file.webkitRelativePath !== ""
                ? file.webkitRelativePath
                : file.name
            )
            setFiles(fileList)
          }
        }}
      >
        <Button variant="outline">
          <FolderIcon />
          Select a directory
        </Button>
      </FileTrigger>
      {files.length > 0 && (
        <div className="text-muted-foreground text-sm">
          <p className="font-medium">
            Directory contents ({files.length} files):
          </p>
          <ul className="mt-2 max-h-32 space-y-1 overflow-y-auto">
            {files.slice(0, 10).map((file, index) => (
              <li key={index} className="truncate text-xs">
                {file}
              </li>
            ))}
            {files.length > 10 && (
              <li className="text-xs italic">
                ...and {files.length - 10} more files
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
