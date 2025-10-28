import * as React from "react"
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
} from "lucide-react"

import {
  Select,
  SelectItem,
  SelectSection,
} from "@/registry/new-york-v4/ui/select"

export function SelectDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Select label="Fruit" className="w-[180px]">
        <SelectSection title="Fruits">
          <SelectItem id="apple">Apple</SelectItem>
          <SelectItem id="banana">Banana</SelectItem>
          <SelectItem id="blueberry">Blueberry</SelectItem>
          <SelectItem id="grapes" isDisabled>
            Grapes
          </SelectItem>
          <SelectItem id="pineapple">Pineapple</SelectItem>
        </SelectSection>
      </Select>
      <Select label="Items" className="w-[180px]">
        {Array.from({ length: 100 }).map((_, i) => (
          <SelectItem key={i} id={`item-${i}`}>
            Item {i}
          </SelectItem>
        ))}
      </Select>
      <Select label="Disabled" isDisabled className="w-[180px]">
        <SelectItem id="apple">Apple</SelectItem>
        <SelectItem id="banana">Banana</SelectItem>
        <SelectItem id="blueberry">Blueberry</SelectItem>
        <SelectItem id="grapes" isDisabled>
          Grapes
        </SelectItem>
        <SelectItem id="pineapple">Pineapple</SelectItem>
      </Select>
      <Select label="Chart Type" className="w-[180px]">
        <SelectItem id="line">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem id="bar">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem id="pie">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </Select>
    </div>
  )
}
