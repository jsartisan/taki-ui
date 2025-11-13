"use client"

import { PlusIcon, SparklesIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"

type ConversationType = {
  id: string
  title: string
  timestamp: string
}

interface ChatMobileSidebarProps {
  conversations: ConversationType[]
  activeConversationId: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onConversationChange: (id: string) => void
  onNewConversation: () => void
  trigger: React.ReactNode
}

export function ChatMobileSidebar({
  conversations,
  activeConversationId,
  isOpen,
  onOpenChange,
  onConversationChange,
  onNewConversation,
  trigger,
}: ChatMobileSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="flex items-center gap-2">
            <SparklesIcon className="text-primary h-5 w-5" />
            AI Chat
          </SheetTitle>
        </SheetHeader>

        <div className="p-3">
          <Button onClick={onNewConversation} className="w-full gap-2">
            <PlusIcon className="h-4 w-4" />
            New Conversation
          </Button>
        </div>

        <div className="h-[calc(100vh-200px)] overflow-y-auto">
          <div className="space-y-1 p-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => {
                  onConversationChange(conv.id)
                  onOpenChange(false)
                }}
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
      </SheetContent>
    </Sheet>
  )
}
