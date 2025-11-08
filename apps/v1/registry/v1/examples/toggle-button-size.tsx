import { BoldIcon } from "lucide-react"

import { ToggleButton } from "@/registry/v1/ui/toggle-button"

export default function ToggleButtonSize() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleButton variant="outline" size="sm" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleButton>
      <ToggleButton variant="outline" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleButton>
      <ToggleButton variant="outline" size="lg" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleButton>
    </div>
  )
}
