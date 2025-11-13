import { Tree, TreeItem } from "@/registry/new-york/ui/tree"

export default function TreeDisabledDemo() {
  return (
    <Tree
      aria-label="Files"
      className="w-64"
      selectionMode="multiple"
      disabledKeys={["budget", "family"]}
      defaultExpandedKeys={["documents", "photos"]}
    >
      <TreeItem id="documents" title="Documents">
        <TreeItem id="project" title="Project">
          <TreeItem id="report" title="Weekly Report" />
        </TreeItem>
        <TreeItem id="budget" title="Budget (Disabled)" />
      </TreeItem>
      <TreeItem id="photos" title="Photos">
        <TreeItem id="vacation" title="Vacation" />
        <TreeItem id="family" title="Family (Disabled)" />
      </TreeItem>
    </Tree>
  )
}
