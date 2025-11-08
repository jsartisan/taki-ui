"use client"

import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/v1/ui/button"
import { Tree, TreeItem } from "@/registry/v1/ui/tree"

export default function TreeActionsDemo() {
  return (
    <Tree
      aria-label="Files"
      className="w-80"
      defaultExpandedKeys={["documents", "photos"]}
    >
      <TreeItem id="documents" title="Documents">
        <TreeItem id="project" title="Project">
          <TreeItem id="report" title="Weekly Report" />
        </TreeItem>
      </TreeItem>
      <TreeItem id="photos" title="Photos">
        <TreeItem id="vacation" title="Vacation" />
      </TreeItem>
    </Tree>
  )
}
