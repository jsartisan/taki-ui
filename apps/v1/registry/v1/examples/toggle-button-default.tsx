import { BoldIcon } from "lucide-react"

import { ToggleButton } from "@/registry/v1/ui/toggle-button"

export default function ToggleButtonDefault() {
  return (
    <ToggleButton aria-label="Toggle bold">
      <BoldIcon />
    </ToggleButton>
  )
}
