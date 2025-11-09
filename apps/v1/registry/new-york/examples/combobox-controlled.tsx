"use client"

import { useState } from "react"

import { ComboBox, ComboBoxItem } from "@/registry/new-york/ui/combobox"

const countries = [
  { id: "us", name: "United States" },
  { id: "uk", name: "United Kingdom" },
  { id: "ca", name: "Canada" },
  { id: "au", name: "Australia" },
  { id: "de", name: "Germany" },
  { id: "fr", name: "France" },
  { id: "jp", name: "Japan" },
  { id: "in", name: "India" },
]

export default function ComboboxControlled() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <ComboBox
        label="Select Country"
        placeholder="Search countries..."
        className="w-full max-w-xs"
        selectedKey={selectedKey}
        onSelectionChange={(key) => setSelectedKey(key as string)}
      >
        {countries.map((country) => (
          <ComboBoxItem
            key={country.id}
            id={country.id}
            textValue={country.name}
          >
            {country.name}
          </ComboBoxItem>
        ))}
      </ComboBox>
      {selectedKey && (
        <p className="text-muted-foreground text-sm">
          Selected: {countries.find((c) => c.id === selectedKey)?.name}
        </p>
      )}
    </div>
  )
}
