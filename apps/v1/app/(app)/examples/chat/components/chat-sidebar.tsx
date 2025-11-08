"use client"

import { PlusIcon, SearchIcon, SettingsIcon, SparklesIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/v1/ui/button"
import { Input } from "@/registry/v1/ui/input"

type ConversationType = {
  id: string
  title: string
  timestamp: string
}

interface ChatSidebarProps {
  conversations: ConversationType[]
  activeConversationId: string
  onConversationChange: (id: string) => void
  onNewConversation: () => void
}

export function ChatSidebar({
  conversations,
  activeConversationId,
  onConversationChange,
  onNewConversation,
}: ChatSidebarProps) {
  return (
    <aside className="bg-muted/30 hidden w-72 flex-col border-r lg:flex">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="text-primary h-5 w-5" />
          <h2 className="font-semibold">AI Chat</h2>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={onNewConversation}
          aria-label="New conversation"
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-3">
        <div className="relative">
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search conversations..."
            className="pl-9"
            aria-label="Search conversations"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1 p-2">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onConversationChange(conv.id)}
              className={cn(
                "hover:bg-accent flex w-full flex-col items-start gap-1 rounded-lg p-3 text-left transition-colors",
                activeConversationId === conv.id && "bg-accent"
              )}
            >
              <span className="truncate font-medium">{conv.title}</span>
              <span className="text-muted-foreground text-xs">
                {conv.timestamp}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Button>
      </div>
    </aside>
  )
}
