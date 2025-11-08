import { CircleFadingArrowUpIcon } from "lucide-react"

import { Button } from "@/registry/v1/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}
