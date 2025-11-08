"use client"

import { useState } from "react"

import { Suggestion, Suggestions } from "@/registry/v1/ai-elements/suggestion"

export default function SuggestionDemo() {
  const [selected, setSelected] = useState<string | null>(null)

  const suggestions = [
    "Explain quantum computing",
    "Write a haiku",
    "Debug my code",
    "Plan a trip",
  ]

  return (
    <div className="space-y-4">
      <Suggestions>
        {suggestions.map((suggestion) => (
          <Suggestion
            key={suggestion}
            suggestion={suggestion}
            onClick={(value) => setSelected(value)}
          />
        ))}
      </Suggestions>
      {selected && (
        <p className="text-muted-foreground text-sm">Selected: {selected}</p>
      )}
    </div>
  )
}
