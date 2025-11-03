"use client"

import { BotIcon, UserIcon } from "lucide-react"

import { Loader } from "@/registry/new-york-v4/ai-elements/loader"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/new-york-v4/ai-elements/reasoning"
import { cn } from "@/lib/utils"

export type MessageType = {
  id: string
  role: "user" | "assistant"
  content: string
  reasoning?: string
  isStreaming?: boolean
}

interface ChatMessageItemProps {
  message: MessageType
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
  return (
    <Message
      className={cn(
        message.role === "user" && "justify-end",
        "flex items-start gap-3"
      )}
    >
      {message.role === "assistant" && (
        <MessageAvatar className="bg-primary/10 text-primary">
          <BotIcon className="h-4 w-4" />
        </MessageAvatar>
      )}

      <div className="flex flex-1 flex-col gap-3">
        {message.role === "assistant" && message.reasoning && (
          <Reasoning isStreaming={message.isStreaming} duration={2}>
            <ReasoningTrigger />
            <ReasoningContent>{message.reasoning}</ReasoningContent>
          </Reasoning>
        )}

        <MessageContent
          className={cn(
            message.role === "user" &&
              "bg-primary text-primary-foreground ml-auto",
            message.role === "assistant" && "bg-muted"
          )}
        >
          {message.isStreaming ? (
            <div className="flex items-center gap-2">
              <Loader />
              <span className="text-muted-foreground text-sm">Thinking...</span>
            </div>
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}
        </MessageContent>
      </div>

      {message.role === "user" && (
        <MessageAvatar className="bg-primary text-primary-foreground">
          <UserIcon className="h-4 w-4" />
        </MessageAvatar>
      )}
    </Message>
  )
}

