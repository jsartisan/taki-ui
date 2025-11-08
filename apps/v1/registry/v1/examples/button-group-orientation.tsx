import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/v1/ui/button"
import { ButtonGroup } from "@/registry/v1/ui/button-group"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
