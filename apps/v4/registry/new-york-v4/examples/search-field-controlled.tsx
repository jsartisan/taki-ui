"use client"

import { useState } from "react"

import { SearchField } from "@/registry/new-york-v4/ui/search-field"

export default function SearchFieldControlled() {
  const [value, setValue] = useState("")

  return (
    <div className="grid w-full max-w-md gap-4">
      <SearchField
        label="Search"
        description={
          value ? `Searching for: "${value}"` : "Enter a search term"
        }
        placeholder="Search..."
        value={value}
        onChange={setValue}
      />
    </div>
  )
}
