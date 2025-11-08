"use client"

import { useState } from "react"
import { StarIcon } from "lucide-react"

import { ToggleButton } from "@/registry/v1/ui/toggle-button"

export default function ToggleButtonControlled() {
  const [isSelected, setSelected] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <ToggleButton
        variant="outline"
        isSelected={isSelected}
        onChange={setSelected}
        aria-label="Toggle favorite"
      >
        <StarIcon className={isSelected ? "fill-current" : ""} />
        Favorite
      </ToggleButton>
      <p className="text-muted-foreground text-sm">
        Status: {isSelected ? "Favorited" : "Not favorited"}
      </p>
    </div>
  )
}
