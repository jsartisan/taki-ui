"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { SearchField } from "@/registry/new-york-v4/ui/search-field"

export default function SearchFieldWithButton() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = (value: string) => {
    if (value) {
      setResults([
        `Result 1 for "${value}"`,
        `Result 2 for "${value}"`,
        `Result 3 for "${value}"`,
      ])
    } else {
      setResults([])
    }
  }

  return (
    <div className="grid w-full max-w-md gap-4">
      <div className="flex gap-2">
        <SearchField
          label="Search"
          placeholder="Search..."
          value={value}
          onChange={setValue}
          onSubmit={handleSubmit}
          className="flex-1"
        />
        <Button className="mt-auto" onPress={() => handleSubmit(value)}>
          Search
        </Button>
      </div>
      {results.length > 0 && (
        <div className="bg-muted rounded-md p-4">
          <p className="text-muted-foreground mb-2 text-sm font-medium">
            Search Results:
          </p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="text-sm">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
