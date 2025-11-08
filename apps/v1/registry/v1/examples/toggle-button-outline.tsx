import { BoldIcon } from "lucide-react"

import { ToggleButton } from "@/registry/v1/ui/toggle-button"

export default function ToggleButtonOutline() {
  return (
    <ToggleButton variant="outline" aria-label="Toggle bold">
      <BoldIcon />
    </ToggleButton>
  )
}
