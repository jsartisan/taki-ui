"use client"

import { ComboBox, ComboBoxItem } from "@/registry/new-york-v4/ui/combobox"

const priorities = [
  { id: "low", name: "Low" },
  { id: "medium", name: "Medium" },
  { id: "high", name: "High" },
  { id: "urgent", name: "Urgent" },
]

export default function ComboboxValidation() {
  return (
    <ComboBox
      label="Priority"
      placeholder="Select priority..."
      className="w-full max-w-xs"
      isRequired
      errorMessage="Please select a priority level."
    >
      {priorities.map((priority) => (
        <ComboBoxItem
          key={priority.id}
          id={priority.id}
          textValue={priority.name}
        >
          {priority.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  )
}
