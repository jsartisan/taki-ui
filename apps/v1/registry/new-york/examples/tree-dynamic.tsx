"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york/ui/button"
import { Tree, TreeItem } from "@/registry/new-york/ui/tree"

interface FileNode {
  id: string
  title: string
  children?: FileNode[]
}

export default function TreeDynamicDemo() {
  const [items, setItems] = useState<FileNode[]>([
    {
      id: "documents",
      title: "Documents",
      children: [
        {
          id: "project",
          title: "Project",
          children: [
            { id: "report", title: "Weekly Report" },
            { id: "presentation", title: "Presentation" },
          ],
        },
      ],
    },
    {
      id: "photos",
      title: "Photos",
      children: [{ id: "vacation", title: "Vacation" }],
    },
  ])

  const addItem = () => {
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        title: `New Folder ${items.length + 1}`,
      },
    ])
  }

  const renderItem = (item: FileNode): React.ReactElement => (
    <TreeItem key={item.id} id={item.id} title={item.title}>
      {item.children?.map(renderItem)}
    </TreeItem>
  )

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={addItem} size="sm" variant="outline" className="w-fit">
        Add Folder
      </Button>
      <Tree
        aria-label="Files"
        className="w-64"
        defaultExpandedKeys={["documents", "project"]}
      >
        {items.map(renderItem)}
      </Tree>
    </div>
  )
}
