"use client"

import {
  Context,
  ContextContent,
  ContextContentHeader,
  ContextTrigger,
} from "@/registry/new-york-v4/ai-elements/context"

export default function ContextDemo() {
  const usage = {
    promptTokens: 2500,
    completionTokens: 1000,
    totalTokens: 3500,
  }

  return (
    <div className="flex items-center justify-center">
      <Context
        maxTokens={128000}
        modelId="gpt-4o-mini"
        usage={usage}
        usedTokens={usage.totalTokens}
      >
        <ContextTrigger />
        <ContextContent>
          <ContextContentHeader />
        </ContextContent>
      </Context>
    </div>
  )
}
