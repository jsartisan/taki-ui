import {
  CopyIcon,
  RefreshCwIcon,
  SearchIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Action, Actions } from "@/registry/v1/ai-elements/actions"
import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtStep,
} from "@/registry/v1/ai-elements/chain-of-thought"
import {
  Conversation,
  ConversationContent,
} from "@/registry/v1/ai-elements/conversation"
import {
  Message,
  MessageContent,
} from "@/registry/v1/ai-elements/message"
import { Shimmer } from "@/registry/v1/ai-elements/shimmer"
import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/registry/v1/ai-elements/task"

export function ChatMessages() {
  return (
    <Conversation>
      <ConversationContent>
        <Message from="user">
          <MessageContent>
            Create me a todo app with a clean, minimalist design
          </MessageContent>
        </Message>
        <ChainOfThought>
          <ChainOfThoughtHeader>Thought for 1s</ChainOfThoughtHeader>
          <ChainOfThoughtContent>
            <ChainOfThoughtStep
              label="The user wants me to create a todo app. This is a straightforward web app development task. Let me think about the approach:"
              status="complete"
            />

            <ChainOfThoughtStep
              label="This is a single cohesive app (not multiple independent systems), so I don't need to use TodoManager"
              status="complete"
            />

            <ChainOfThoughtStep
              icon={SearchIcon}
              label="I should first explore the codebase structure to understand what's available"
              status="complete"
            />

            <ChainOfThoughtStep
              label="Then I can build a todo app with typical features like:"
              status="complete"
            >
              <ul>
                <li>Adding todos</li>
                <li>Marking todos as complete</li>
                <li>Deleting todos</li>
                <li>Nice UI using shadcn/ui components</li>
                <li>Local storage or state management</li>
              </ul>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep
              icon={SearchIcon}
              label="Let me start by searching the repo to understand the codebase structure, then I'll build the app."
              status="complete"
            />
          </ChainOfThoughtContent>
        </ChainOfThought>
        <Task>
          <TaskTrigger title="Explored codebase" />
          <TaskContent>
            <TaskItem>
              Searching &apos;Give me an overview of the codebase&apos;
            </TaskItem>
            <TaskItem>
              Read <TaskItemFile>layout.tsx</TaskItemFile>
            </TaskItem>
            <TaskItem>
              Read <TaskItemFile>globals.css</TaskItemFile>
            </TaskItem>
          </TaskContent>
        </Task>
        <Message from="assistant">
          <MessageContent variant="flat">
            I&apos;ll create a modern todo app with a clean, minimalist design
            inspired by the dark theme aesthetic. I&apos;ll build it with task
            management features including add, complete, and delete
            functionality, using local state for a smooth user experience.
          </MessageContent>
          <Actions>
            <Action tooltip="Retry" label="Retry" size="sm">
              <RefreshCwIcon className="size-4" />
            </Action>
            <Action tooltip="Like" label="Like">
              <ThumbsUpIcon className="size-4" />
            </Action>
            <Action tooltip="Dislike" label="Dislike">
              <ThumbsDownIcon className="size-4" />
            </Action>
            <Action tooltip="Copy" label="Copy">
              <CopyIcon className="size-4" />
            </Action>
          </Actions>
        </Message>
        <Shimmer className="text-sm">Building...</Shimmer>
      </ConversationContent>
    </Conversation>
  )
}
