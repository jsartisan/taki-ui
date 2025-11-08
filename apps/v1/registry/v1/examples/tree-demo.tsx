import { Tree, TreeItem } from "@/registry/v1/ui/tree"

export default function TreeDemo() {
  return (
    <Tree
      aria-label="Files"
      className="w-64"
      defaultExpandedKeys={["documents", "photos"]}
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
        <TreeItem id="recordings" title="Recordings" />
      </TreeItem>
    </Tree>
  )
}
