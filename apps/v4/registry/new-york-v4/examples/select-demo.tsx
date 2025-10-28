import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"

export default function SelectDemo() {
  return (
    <Select label="Fruit" placeholder="Select a fruit" className="w-[180px]">
      <SelectItem id="apple">Apple</SelectItem>
      <SelectItem id="banana">Banana</SelectItem>
      <SelectItem id="blueberry">Blueberry</SelectItem>
      <SelectItem id="grapes">Grapes</SelectItem>
      <SelectItem id="pineapple">Pineapple</SelectItem>
    </Select>
  )
}
