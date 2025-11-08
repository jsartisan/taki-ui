"use client"

import { useState } from "react"

import { ListBox, ListBoxItem } from "@/registry/v1/ui/list-box"

export default function ListBoxMultiple() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  return (
    <div className="flex flex-col gap-4">
      <ListBox
        aria-label="Favorite animals"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={(keys) => setSelected(keys as Set<string>)}
        className="w-64"
      >
        <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
        <ListBoxItem id="cat">Cat</ListBoxItem>
        <ListBoxItem id="dog">Dog</ListBoxItem>
        <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
        <ListBoxItem id="panda">Panda</ListBoxItem>
        <ListBoxItem id="snake">Snake</ListBoxItem>
      </ListBox>
      <p className="text-muted-foreground text-sm">
        Selected: {selected.size > 0 ? Array.from(selected).join(", ") : "None"}
      </p>
    </div>
  )
}
