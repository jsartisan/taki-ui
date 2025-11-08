"use client"

import { useEffect, useState } from "react"
import {
  CopyIcon,
  RefreshCwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Action, Actions } from "@/registry/v1/ai-elements/actions"
import {
  Conversation,
  ConversationContent,
} from "@/registry/v1/ai-elements/conversation"
import { Message, MessageContent } from "@/registry/v1/ai-elements/message"
import { Response } from "@/registry/v1/ai-elements/response"

import { assistantMessage } from "./chat-data"

export function ChatMessages(props: { className?: string }) {
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamedMessage, setStreamedMessage] = useState("")

  useEffect(() => {
    let currentIndex = 0
    setIsStreaming(true)
    const streamInterval = setInterval(() => {
      if (currentIndex < assistantMessage.length) {
        setStreamedMessage(assistantMessage.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(streamInterval)
        setIsStreaming(false)
      }
    }, 20)

    return () => clearInterval(streamInterval)
  }, [])

  return (
    <Conversation className={props.className}>
      <ConversationContent className="mx-auto w-3xl">
        <Message from="user">
          <MessageContent>
            Explain the difference between server components and client
            components in Next.js — with a code example for each.
          </MessageContent>
        </Message>
        <Message from="assistant">
          <MessageContent>
            <Response>{streamedMessage}</Response>
          </MessageContent>
        </Message>
        {isStreaming === false && streamedMessage.length > 0 && (
          <Actions>
            <Action tooltip="Retry" label="Retry">
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
        )}
        <div className="pb-10" />
      </ConversationContent>
    </Conversation>
  )
}

{
  /* <Message from="user">
<MessageContent>
  Explain the difference between server components and client
  components in Next.js — with a code example for each.
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
  <TaskItem>Reading files</TaskItem>
  <TaskItem>
    <div className="flex flex-wrap gap-2">
      <TaskItemFile>layout.tsx</TaskItemFile>
      <TaskItemFile>globals.css</TaskItemFile>
    </div>
  </TaskItem>
</TaskContent>
</Task>

<Message from="assistant">
<MessageContent>
  I&apos;ll create a modern todo app with a clean, minimalist design
  inspired by the dark theme aesthetic. I'll build it with task
  management features including add, complete, and delete
  functionality, using local state for a smooth user experience.
</MessageContent>
<Actions>
  <Action tooltip="Retry" label="Retry">
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
<Shimmer className="text-sm">Building...</Shimmer> */
}
