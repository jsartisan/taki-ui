"use client"

import { useState } from "react"
import {
  CopyIcon,
  RefreshCwIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Action, Actions } from "@/registry/new-york-v4/ai-elements/actions"
import {
  Conversation,
  ConversationContent,
} from "@/registry/new-york-v4/ai-elements/conversation"
import {
  Message,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"

const messages = [
  {
    id: "1",
    from: "user" as const,
    content: "Hello, how are you?",
    avatar: "https://github.com/haydenbleasel.png",
    name: "Hayden Bleasel",
  },
  {
    id: "2",
    from: "assistant" as const,
    content: "I am fine, thank you!",
    avatar: "https://github.com/openai.png",
    name: "OpenAI",
  },
]

export default function ActionsDemo() {
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const handleRetry = () => {
    console.log("Retry clicked")
  }

  const handleCopy = () => {
    console.log("Copy clicked")
  }

  const handleShare = () => {
    console.log("Share clicked")
  }

  const actions = [
    {
      icon: RefreshCwIcon,
      label: "Retry",
      onClick: handleRetry,
    },
    {
      icon: ThumbsUpIcon,
      label: "Like",
      onClick: () => setLiked(!liked),
    },
    {
      icon: ThumbsDownIcon,
      label: "Dislike",
      onClick: () => setDisliked(!disliked),
    },
    {
      icon: CopyIcon,
      label: "Copy",
      onClick: handleCopy,
    },
    {
      icon: ShareIcon,
      label: "Share",
      onClick: handleShare,
    },
  ]

  return (
    <Conversation className="relative w-full">
      <ConversationContent>
        {messages.map((message) => (
          <Message
            className={`flex flex-col gap-2 ${message.from === "assistant" ? "items-start" : "items-end"}`}
            from={message.from}
            key={message.id}
          >
            <MessageContent>{message.content}</MessageContent>
            {message.from === "assistant" && (
              <Actions className="mt-2">
                {actions.map((action) => (
                  <Action
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    tooltip={action.label}
                  >
                    <action.icon className="size-4" />
                  </Action>
                ))}
              </Actions>
            )}
          </Message>
        ))}
      </ConversationContent>
    </Conversation>
  )
}
