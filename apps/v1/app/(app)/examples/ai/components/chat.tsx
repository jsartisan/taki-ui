"use client"

import { ChatInput } from "./chat-input"
import { ChatMessages } from "./chat-messages"

export function Chat() {
  return (
    <div className="relative flex min-h-0 w-[480px] min-w-0 flex-col p-4">
      <ChatMessages />
      <ChatInput />
    </div>
  )
}
