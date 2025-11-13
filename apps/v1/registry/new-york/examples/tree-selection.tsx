"use client"

import { useState } from "react"

import { Tree, TreeItem } from "@/registry/new-york/ui/tree"

export default function TreeSelectionDemo() {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(["photos", "vacation"])
  )

  return (
    <div className="flex flex-col gap-4">
      <Tree
        aria-label="Files"
        className="w-64"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={(keys) => setSelected(keys as Set<string>)}
        defaultExpandedKeys={["documents", "photos", "vacation"]}
      >
        <TreeItem id="documents" title="Documents">
          <TreeItem id="project" title="Project">
            <TreeItem id="report" title="Weekly Report" />
            <TreeItem id="presentation" title="Presentation" />
          </TreeItem>
          <TreeItem id="budget" title="Budget" />
        </TreeItem>
        <TreeItem id="photos" title="Photos">
          <TreeItem id="vacation" title="Vacation">
            <TreeItem id="beach" title="Beach" />
            <TreeItem id="mountains" title="Mountains" />
          </TreeItem>
          <TreeItem id="family" title="Family" />
        </TreeItem>
        <TreeItem id="videos" title="Videos">
          <TreeItem id="tutorials" title="Tutorials" />
        </TreeItem>
      </Tree>
      <div className="text-muted-foreground text-sm">
        Selected: {Array.from(selected).join(", ")}
      </div>
    </div>
  )
}
