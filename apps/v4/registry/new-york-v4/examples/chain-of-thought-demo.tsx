import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtStep,
} from "@/registry/new-york-v4/ai-elements/chain-of-thought"

export default function ChainOfThoughtDemo() {
  const steps = [
    {
      id: "1",
      title: "Understand the problem",
      content:
        "The user wants to build a responsive layout for their website using modern CSS techniques.",
    },
    {
      id: "2",
      title: "Consider solutions",
      content:
        "Options include CSS Grid, Flexbox, or a combination. Grid is best for 2D layouts.",
    },
    {
      id: "3",
      title: "Plan implementation",
      content:
        "Use CSS Grid with media queries for breakpoints. Start mobile-first.",
    },
    {
      id: "4",
      title: "Provide solution",
      content:
        "Create a grid template with auto-fit columns and minmax for responsive behavior.",
    },
  ]

  return (
    <div className="w-full max-w-2xl">
      <ChainOfThought>
        <ChainOfThoughtHeader>Reasoning Process</ChainOfThoughtHeader>
        <ChainOfThoughtContent>
          {steps.map((step, index) => (
            <ChainOfThoughtStep
              key={step.id}
              isActive={index === steps.length - 1}
              isCompleted={index < steps.length - 1}
              number={index + 1}
              title={step.title}
            >
              {step.content}
            </ChainOfThoughtStep>
          ))}
        </ChainOfThoughtContent>
      </ChainOfThought>
    </div>
  )
}
