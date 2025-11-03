import { Tag, TagGroup } from "@/registry/new-york-v4/ui/tag-group"

export default function TagGroupVariantsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <TagGroup label="Default" description="Default variant tags">
        <Tag id="react">React</Tag>
        <Tag id="vue">Vue</Tag>
        <Tag id="angular">Angular</Tag>
      </TagGroup>

      <TagGroup label="Primary" description="Primary variant tags">
        <Tag id="react" variant="primary">
          React
        </Tag>
        <Tag id="vue" variant="primary">
          Vue
        </Tag>
        <Tag id="angular" variant="primary">
          Angular
        </Tag>
      </TagGroup>

      <TagGroup label="Secondary" description="Secondary variant tags">
        <Tag id="react" variant="secondary">
          React
        </Tag>
        <Tag id="vue" variant="secondary">
          Vue
        </Tag>
        <Tag id="angular" variant="secondary">
          Angular
        </Tag>
      </TagGroup>

      <TagGroup label="Destructive" description="Destructive variant tags">
        <Tag id="bug" variant="destructive">
          Bug
        </Tag>
        <Tag id="error" variant="destructive">
          Error
        </Tag>
        <Tag id="critical" variant="destructive">
          Critical
        </Tag>
      </TagGroup>

      <TagGroup label="Outline" description="Outline variant tags">
        <Tag id="react" variant="outline">
          React
        </Tag>
        <Tag id="vue" variant="outline">
          Vue
        </Tag>
        <Tag id="angular" variant="outline">
          Angular
        </Tag>
      </TagGroup>
    </div>
  )
}
