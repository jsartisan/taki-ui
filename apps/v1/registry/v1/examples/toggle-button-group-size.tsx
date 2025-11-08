import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  ToggleButtonGroup,
  ToggleButtonGroupItem,
} from "@/registry/v1/ui/toggle-button-group"

export default function ToggleButtonGroupSize() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleButtonGroup
        variant="outline"
        size="sm"
        aria-label="Text formatting"
      >
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

      <ToggleButtonGroup
        variant="outline"
        size="lg"
        aria-label="Text formatting"
      >
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
    </div>
  )
}
