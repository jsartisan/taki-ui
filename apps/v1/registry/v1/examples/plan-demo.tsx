import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanFooter,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/registry/v1/ai-elements/plan"

import { Button } from "../ui/button"

export default function PlanDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Plan defaultExpanded={false} isStreaming={false}>
        <PlanHeader>
          <div className="space-y-1">
            <PlanTitle>Build a Todo App</PlanTitle>
            <PlanDescription>
              Create a full-featured todo application with React and TypeScript
            </PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">1.</span>
              <span>Set up project structure with Vite and TypeScript</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">2.</span>
              <span>
                Create todo item component with edit and delete actions
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">3.</span>
              <span>Implement state management using React hooks</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">4.</span>
              <span>Add local storage persistence</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground">5.</span>
              <span>Style with Tailwind CSS and add animations</span>
            </div>
          </div>
        </PlanContent>
      </Plan>
    </div>
  )
}
