import { BoldIcon } from "lucide-react"

import { ToggleButton } from "@/registry/new-york/ui/toggle-button"

export default function ToggleButtonOutline() {
  return (
    <ToggleButton variant="outline" aria-label="Toggle bold">
      <BoldIcon />
    </ToggleButton>
  )
}
