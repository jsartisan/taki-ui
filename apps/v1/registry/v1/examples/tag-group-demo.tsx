import { Tag, TagGroup } from "@/registry/v1/ui/tag-group"

export default function TagGroupDemo() {
  return (
    <TagGroup
      label="Categories"
      description="Select your categories"
      selectionMode="single"
    >
      <Tag id="news">News</Tag>
      <Tag id="travel">Travel</Tag>
      <Tag id="gaming">Gaming</Tag>
      <Tag id="shopping">Shopping</Tag>
    </TagGroup>
  )
}
