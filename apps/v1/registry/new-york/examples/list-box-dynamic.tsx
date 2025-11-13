"use client"

import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

interface Animal {
  id: string
  name: string
}

const animals: Animal[] = [
  { id: "aardvark", name: "Aardvark" },
  { id: "cat", name: "Cat" },
  { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" },
  { id: "panda", name: "Panda" },
  { id: "snake", name: "Snake" },
]

export default function ListBoxDynamic() {
  return (
    <ListBox
      aria-label="Favorite animal"
      selectionMode="single"
      items={animals}
      className="w-64"
    >
      {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
    </ListBox>
  )
}
