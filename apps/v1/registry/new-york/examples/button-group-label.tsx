import {
  ButtonGroup,
  ButtonGroupLabel,
} from "@/registry/new-york/ui/button-group"
import { Input } from "@/registry/new-york/ui/input"

export default function ButtonGroupLabelDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupLabel htmlFor="top-button">Label</ButtonGroupLabel>
      <Input id="top-button" placeholder="Type something here..." />
    </ButtonGroup>
  )
}
