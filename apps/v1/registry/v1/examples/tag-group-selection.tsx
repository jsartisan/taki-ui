"use client"

import { useState } from "react"

import { Tag, TagGroup } from "@/registry/v1/ui/tag-group"

export default function TagGroupSelectionDemo() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["sports", "music"])
  )

  return (
    <TagGroup
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={(keys) => setSelected(keys as Set<string>)}
      label="Interests"
      description="Select your interests"
    >
      <Tag id="sports">Sports</Tag>
      <Tag id="music">Music</Tag>
      <Tag id="travel">Travel</Tag>
      <Tag id="gaming">Gaming</Tag>
      <Tag id="technology">Technology</Tag>
    </TagGroup>
  )
}
