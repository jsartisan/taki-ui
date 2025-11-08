"use client"

import { useState } from "react"
import { ImageIcon } from "lucide-react"

import { Button } from "@/registry/v1/ui/button"
import { FileTrigger } from "@/registry/v1/ui/file-trigger"

export default function FileTriggerImage() {
  const [image, setImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <FileTrigger
        acceptedFileTypes={[
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/gif",
        ]}
        onSelect={(e) => {
          const files = e ? Array.from(e) : []
          if (files.length > 0) {
            setImage(files[0].name)
          }
        }}
      >
        <Button variant="outline">
          <ImageIcon />
          Select an image
        </Button>
      </FileTrigger>
      {image && (
        <p className="text-muted-foreground text-sm">Selected: {image}</p>
      )}
    </div>
  )
}
