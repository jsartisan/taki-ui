import { Response } from "@/registry/new-york/ai-elements/response"

export default function ResponseDemo() {
  const markdown = `# Welcome to Response

This component renders markdown content with streaming support.

## Features

- **Streaming**: Progressive rendering as content arrives
- **Markdown**: Full markdown syntax support
- **Performance**: Optimized for real-time updates

\`\`\`typescript
const message = "Hello, World!"
console.log(message)
\`\`\`

> This is a quote from the AI assistant

- List item 1
- List item 2
- List item 3`

  return (
    <div className="w-full max-w-2xl space-y-4">
      <Response>{markdown}</Response>
    </div>
  )
}
