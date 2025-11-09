"use client"

import { BotIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

interface ChatEmptyStateProps {
  suggestions: string[]
  onSuggestionClick: (text: string) => void
}

export function ChatEmptyState({
  suggestions,
  onSuggestionClick,
}: ChatEmptyStateProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 py-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="bg-primary/10 text-primary rounded-full p-4">
          <BotIcon className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">How can I help you today?</h2>
          <p className="text-muted-foreground mt-2">
            Ask me anything or try one of these suggestions
          </p>
        </div>
      </div>

      <div className="grid w-full max-w-2xl gap-2 sm:grid-cols-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto justify-start p-4 text-left whitespace-normal"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}
