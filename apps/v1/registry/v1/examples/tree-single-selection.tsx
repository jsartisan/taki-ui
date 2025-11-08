"use client"

import { useState } from "react"

import { Tree, TreeItem } from "@/registry/v1/ui/tree"

export default function TreeSingleSelectionDemo() {
  const [selected, setSelected] = useState<"all" | Set<string>>(
    new Set(["project"])
  )

  return (
    <div className="flex flex-col gap-4">
      <Tree
        aria-label="Files"
        className="w-64"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        defaultExpandedKeys={["documents"]}
      >
        <TreeItem id="documents" title="Documents">
          <TreeItem id="project" title="Project">
            <TreeItem id="report" title="Weekly Report" />
            <TreeItem id="presentation" title="Presentation" />
          </TreeItem>
          <TreeItem id="budget" title="Budget" />
        </TreeItem>
        <TreeItem id="photos" title="Photos">
          <TreeItem id="vacation" title="Vacation" />
          <TreeItem id="family" title="Family" />
        </TreeItem>
      </Tree>
      <div className="text-muted-foreground text-sm">
        Selected: {selected === "all" ? "all" : Array.from(selected).join(", ")}
      </div>
    </div>
  )
}
