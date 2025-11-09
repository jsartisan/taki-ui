import { Tag, TagGroup } from "@/registry/new-york/ui/tag-group"

export default function TagGroupDisabledDemo() {
  return (
    <TagGroup label="Categories" description="Select your categories">
      <Tag id="active">Active</Tag>
      <Tag id="disabled" isDisabled>
        Disabled
      </Tag>
    </TagGroup>
  )
}
