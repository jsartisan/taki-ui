import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/new-york-v4/ai-elements/reasoning"

export default function ReasoningDemo() {
  const reasoningText = `To solve this problem, I need to:

1. First, understand the user's question about building a responsive layout
2. Consider the best practices for responsive design in React
3. Think about accessibility and performance implications
4. Provide a clear, actionable solution

Based on this analysis, I recommend using CSS Grid with media queries for a flexible, maintainable layout.`

  return (
    <div className="w-full max-w-2xl">
      <Reasoning defaultOpen={false} duration={3} isStreaming={false}>
        <ReasoningTrigger />
        <ReasoningContent>{reasoningText}</ReasoningContent>
      </Reasoning>
    </div>
  )
}
