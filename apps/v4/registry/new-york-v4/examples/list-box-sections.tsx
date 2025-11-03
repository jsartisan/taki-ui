"use client"

import React from "react"
import { Header, ListBoxSection } from "react-aria-components"

import { ListBox, ListBoxItem } from "@/registry/new-york-v4/ui/list-box"

export default function ListBoxSections() {
  return (
    <ListBox aria-label="Choose a pet" selectionMode="single" className="w-64">
      <ListBoxSection>
        <Header className="text-muted-foreground px-2 py-1 text-xs font-semibold">
          Mammals
        </Header>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection>
        <Header className="text-muted-foreground px-2 py-1 text-xs font-semibold">
          Reptiles
        </Header>
        <ListBoxItem>Snake</ListBoxItem>
        <ListBoxItem>Turtle</ListBoxItem>
        <ListBoxItem>Lizard</ListBoxItem>
      </ListBoxSection>
    </ListBox>
  )
}
