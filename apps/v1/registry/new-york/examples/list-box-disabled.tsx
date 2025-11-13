import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxDisabled() {
  return (
    <ListBox
      aria-label="Favorite animal"
      selectionMode="single"
      disabledKeys={["cat", "kangaroo"]}
      className="w-64"
    >
      <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem id="panda">Panda</ListBoxItem>
      <ListBoxItem id="snake">Snake</ListBoxItem>
    </ListBox>
  )
}
