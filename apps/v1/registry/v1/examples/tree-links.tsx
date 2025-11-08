import { Tree, TreeItem } from "@/registry/v1/ui/tree"

export default function TreeLinksDemo() {
  return (
    <Tree
      aria-label="Navigation"
      className="w-64"
      defaultExpandedKeys={["components", "hooks"]}
    >
      <TreeItem id="components" title="Components">
        <TreeItem id="button" title="Button" href="/docs/components/button" />
        <TreeItem id="input" title="Input" href="/docs/components/input" />
        <TreeItem id="tree" title="Tree" href="/docs/components/tree" />
      </TreeItem>
      <TreeItem id="hooks" title="Hooks">
        <TreeItem
          id="use-state"
          title="useState"
          href="/docs/hooks/use-state"
        />
        <TreeItem
          id="use-effect"
          title="useEffect"
          href="/docs/hooks/use-effect"
        />
      </TreeItem>
    </Tree>
  )
}
