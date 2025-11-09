"use client"

import { useState } from "react"
import { CameraIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { FileTrigger } from "@/registry/new-york/ui/file-trigger"

export default function FileTriggerCamera() {
  const [image, setImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <FileTrigger
        defaultCamera="environment"
        acceptedFileTypes={["image/*"]}
        onSelect={(e) => {
          const files = e ? Array.from(e) : []
          if (files.length > 0) {
            setImage(files[0].name)
          }
        }}
      >
        <Button variant="outline">
          <CameraIcon />
          Open Camera
        </Button>
      </FileTrigger>
      {image && (
        <p className="text-muted-foreground text-sm">Captured: {image}</p>
      )}
    </div>
  )
}
