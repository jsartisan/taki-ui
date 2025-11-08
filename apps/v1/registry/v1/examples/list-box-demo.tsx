import { ListBox, ListBoxItem } from "@/registry/v1/ui/list-box"

export default function ListBoxDemo() {
  return (
    <ListBox
      aria-label="Favorite animal"
      selectionMode="single"
      className="w-64"
    >
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  )
}
