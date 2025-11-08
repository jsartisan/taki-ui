import Link from "next/link"

import { GridList, GridListItem } from "@/registry/new-york-v4/ui/grid-list"

export default function GridListLinks() {
  return (
    <GridList aria-label="Navigation" className="w-64">
      <GridListItem href="/docs" textValue="Documentation">
        <Link href="/docs">Documentation</Link>
      </GridListItem>
      <GridListItem href="/docs/components" textValue="Components">
        <Link href="/docs/components">Components</Link>
      </GridListItem>
      <GridListItem href="/examples" textValue="Examples">
        <Link href="/examples">Examples</Link>
      </GridListItem>
      <GridListItem href="/blocks" textValue="Blocks">
        <Link href="/blocks">Blocks</Link>
      </GridListItem>
    </GridList>
  )
}
