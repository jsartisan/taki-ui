import { Metadata } from "next"
import Image from "next/image"

import { ChatInterface } from "./components/chat-interface"

export const metadata: Metadata = {
  title: "Chat",
  description: "An AI chat interface built using AI elements.",
}

export default function ChatPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/chat-light.png"
          width={1280}
          height={843}
          alt="Chat"
          className="block dark:hidden"
          priority
        />
        <Image
          src="/examples/chat-dark.png"
          width={1280}
          height={843}
          alt="Chat"
          className="hidden dark:block"
          priority
        />
      </div>
      <div className="hidden h-[720px] flex-col md:flex">
        <ChatInterface />
      </div>
    </>
  )
}
