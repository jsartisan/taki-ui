import { ChatInput } from "../../chat/components/chat-input"
import { ChatMessages } from "../../chat/components/chat-messages"
import { Chat } from "./chat"
import { Preview } from "./preview"
import { SiteHeader } from "./site-header"

export function AICodingPlatform() {
  return (
    <div className="bg-background flex h-full">
      <div className="relative grid w-full grid-rows-[auto_720px] [scrollbar-color:var(--border)_transparent]">
        <SiteHeader />
        <div className="flex gap-4">
          <Chat />
          <Preview />
        </div>
      </div>
    </div>
  )
}
