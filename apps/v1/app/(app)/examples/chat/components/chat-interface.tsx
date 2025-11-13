"use client"

import { ChatHeader } from "./chat-header"
import { ChatInput } from "./chat-input"
import { ChatMessages } from "./chat-messages"

export function ChatInterface() {
  return (
    <div className="flex h-full">
      <div className="relative grid w-full grid-rows-[auto_600px] pb-8 [scrollbar-color:var(--border)_transparent]">
        <ChatHeader />
        <div className="relative flex min-h-0 flex-1 flex-col">
          <ChatMessages />
          <ChatInput className="relative mx-auto w-3xl" />
        </div>
      </div>
    </div>
  )
}
