import Link from "next/link"

import { Tag, TagGroup } from "@/registry/new-york/ui/tag-group"

export default function TagGroupLinksDemo() {
  return (
    <TagGroup label="Quick Links" description="Select your quick links">
      <Tag id="docs">
        <Link href="/docs">Documentation</Link>
      </Tag>
      <Tag id="components">
        <Link href="/components">Components</Link>
      </Tag>
      <Tag id="examples">
        <Link href="/examples">Examples</Link>
      </Tag>
      <Tag id="blocks">
        <Link href="/blocks">Blocks</Link>
      </Tag>
    </TagGroup>
  )
}
