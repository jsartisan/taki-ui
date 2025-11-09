"use client"

import { useState } from "react"

import { Tag, TagGroup } from "@/registry/new-york/ui/tag-group"

export default function TagGroupRemovableDemo() {
  const [tags, setTags] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Tailwind CSS" },
    { id: 4, name: "Next.js" },
  ])

  return (
    <TagGroup<{ id: number; name: string }>
      label="Tech Stack"
      description="Select your tech stack"
      items={tags}
      onRemove={(keys) => setTags(tags.filter((tag) => !keys.has(tag.id)))}
    >
      {(item) => <Tag id={item.id}>{item.name}</Tag>}
    </TagGroup>
  )
}
