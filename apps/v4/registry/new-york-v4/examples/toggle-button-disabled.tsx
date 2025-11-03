import { BoldIcon } from "lucide-react"

import { ToggleButton } from "@/registry/new-york-v4/ui/toggle-button"

export default function ToggleButtonDisabled() {
  return (
    <ToggleButton variant="outline" isDisabled aria-label="Toggle bold">
      <BoldIcon />
    </ToggleButton>
  )
}
