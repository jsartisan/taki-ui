"use client"

import { useState } from "react"

import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { GridList, GridListItem } from "@/registry/new-york/ui/grid-list"

export default function GridListSelection() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  return (
    <div className="flex flex-col gap-4">
      <GridList
        aria-label="Favorite pokemon"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={(keys) => setSelected(keys as Set<string>)}
        className="w-64"
      >
        <GridListItem id="charizard" textValue="Charizard">
          <Checkbox slot="selection" />
          Charizard
        </GridListItem>
        <GridListItem id="blastoise" textValue="Blastoise">
          <Checkbox slot="selection" />
          Blastoise
        </GridListItem>
        <GridListItem id="venusaur" textValue="Venusaur">
          <Checkbox slot="selection" />
          Venusaur
        </GridListItem>
        <GridListItem id="pikachu" textValue="Pikachu">
          <Checkbox slot="selection" />
          Pikachu
        </GridListItem>
      </GridList>
      <p className="text-muted-foreground text-sm">
        Selected: {selected.size > 0 ? Array.from(selected).join(", ") : "None"}
      </p>
    </div>
  )
}
