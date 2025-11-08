import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/registry/v1/ai-elements/task"

export default function TaskDemo() {
  return (
    <div className="w-full max-w-2xl space-y-4">
      <Task>
        <TaskTrigger title="Searching codebase for Button component" />
        <TaskContent>
          <TaskItem>
            Found in <TaskItemFile>components/ui/button.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Used in <TaskItemFile>pages/home.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Referenced in <TaskItemFile>components/header.tsx</TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>

      <Task>
        <TaskTrigger title="Analyzing dependencies" />
        <TaskContent>
          <TaskItem>
            Found 3 direct dependencies in{" "}
            <TaskItemFile>package.json</TaskItemFile>
          </TaskItem>
          <TaskItem>All dependencies are up to date</TaskItem>
        </TaskContent>
      </Task>
    </div>
  )
}
