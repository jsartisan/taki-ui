import { MessageSquareIcon } from "lucide-react"

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
} from "@/registry/new-york-v4/ai-elements/conversation"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"

export default function ConversationDemo() {
  const messages = [
    {
      id: "1",
      role: "user" as const,
      content: "What's the weather like today?",
    },
    {
      id: "2",
      role: "assistant" as const,
      content:
        "I don't have access to real-time weather data, but I can help you find weather information for your location.",
    },
  ]

  return (
    <div className="h-[400px] rounded-md border">
      <Conversation>
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState
              icon={<MessageSquareIcon className="size-8" />}
              title="No messages yet"
              description="Start a conversation to see messages here"
            />
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <Message key={msg.id} from={msg.role}>
                  <MessageAvatar
                    src={
                      msg.role === "user"
                        ? "https://github.com/shadcn.png"
                        : "/avatars/shadcn.jpg"
                    }
                    name={msg.role === "user" ? "User" : "AI"}
                  />
                  <MessageContent>{msg.content}</MessageContent>
                </Message>
              ))}
            </div>
          )}
        </ConversationContent>
      </Conversation>
    </div>
  )
}
