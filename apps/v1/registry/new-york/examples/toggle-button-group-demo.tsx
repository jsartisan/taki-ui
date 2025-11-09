import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  ToggleButtonGroup,
  ToggleButtonGroupItem,
} from "@/registry/new-york/ui/toggle-button-group"

export default function ToggleButtonGroupDemo() {
  return (
    <ToggleButtonGroup variant="outline" aria-label="Text formatting">
      <ToggleButtonGroupItem aria-label="Toggle bold">
        <BoldIcon />
      </ToggleButtonGroupItem>
      <ToggleButtonGroupItem aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleButtonGroupItem>
      <ToggleButtonGroupItem aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleButtonGroupItem>
    </ToggleButtonGroup>
  )
}
