import Link from "next/link"

import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxLinks() {
  return (
    <ListBox aria-label="Navigation" className="w-64">
      <ListBoxItem href="/docs" textValue="Documentation">
        <Link href="/docs">Documentation</Link>
      </ListBoxItem>
      <ListBoxItem href="/docs/components" textValue="Components">
        <Link href="/docs/components">Components</Link>
      </ListBoxItem>
      <ListBoxItem href="/examples" textValue="Examples">
        <Link href="/examples">Examples</Link>
      </ListBoxItem>
      <ListBoxItem href="/blocks" textValue="Blocks">
        <Link href="/blocks">Blocks</Link>
      </ListBoxItem>
    </ListBox>
  )
}
