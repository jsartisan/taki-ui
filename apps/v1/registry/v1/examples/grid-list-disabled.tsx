import { GridList, GridListItem } from "@/registry/v1/ui/grid-list"

export default function GridListDisabled() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      disabledKeys={["blastoise", "venusaur"]}
      selectionMode="multiple"
      className="w-64"
    >
      <GridListItem id="charizard">Charizard</GridListItem>
      <GridListItem id="blastoise">Blastoise</GridListItem>
      <GridListItem id="venusaur">Venusaur</GridListItem>
      <GridListItem id="pikachu">Pikachu</GridListItem>
    </GridList>
  )
}
