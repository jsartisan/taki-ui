import { Metadata } from "next"

import { ChatInterface } from "./components/chat-interface"

export const metadata: Metadata = {
  title: "Chat",
  description: "An AI chat interface built using AI elements.",
}

export default function ChatPage() {
  return <ChatInterface />
}
