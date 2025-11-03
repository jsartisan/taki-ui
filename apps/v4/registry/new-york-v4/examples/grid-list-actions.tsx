import { InfoIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { GridList, GridListItem } from "@/registry/new-york-v4/ui/grid-list"

export default function GridListActions() {
  return (
    <GridList aria-label="Favorite pokemon" className="w-64">
      <GridListItem textValue="Charizard">
        Charizard
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Info"
          className="ml-auto"
        >
          <InfoIcon />
        </Button>
      </GridListItem>
      <GridListItem textValue="Blastoise">
        Blastoise
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Info"
          className="ml-auto"
        >
          <InfoIcon />
        </Button>
      </GridListItem>
      <GridListItem textValue="Venusaur">
        Venusaur
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Info"
          className="ml-auto"
        >
          <InfoIcon />
        </Button>
      </GridListItem>
      <GridListItem textValue="Pikachu">
        Pikachu
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Info"
          className="ml-auto"
        >
          <InfoIcon />
        </Button>
      </GridListItem>
    </GridList>
  )
}
