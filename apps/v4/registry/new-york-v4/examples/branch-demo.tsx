"use client"

import { useState } from "react"

import {
  Branch,
  BranchMessages,
} from "@/registry/new-york-v4/ai-elements/branch"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"

export default function BranchDemo() {
  const [currentBranch, setCurrentBranch] = useState(0)

  const branches = [
    {
      id: "1",
      content:
        "I can help you build a todo app! Let's start with setting up the project structure.",
    },
    {
      id: "2",
      content:
        "Sure! For a todo app, I recommend using React with TypeScript and a state management solution like Zustand.",
    },
    {
      id: "3",
      content:
        "Of course! We'll create a modern todo app with features like filtering, sorting, and local storage persistence.",
    },
  ]

  return (
    <div className="w-full max-w-2xl space-y-4">
      <Message from="user">
        <MessageAvatar name="User" src="https://github.com/shadcn.png" />
        <MessageContent>Can you help me build a todo app?</MessageContent>
      </Message>

      <Branch defaultBranch={0} onBranchChange={setCurrentBranch}>
        <BranchMessages>
          {branches.map((branch) => (
            <Message key={branch.id} from="assistant">
              <MessageAvatar name="AI" src="/avatars/shadcn.jpg" />
              <MessageContent>{branch.content}</MessageContent>
            </Message>
          ))}
        </BranchMessages>
      </Branch>

      <p className="text-muted-foreground text-center text-sm">
        Currently viewing branch {currentBranch + 1} of {branches.length}
      </p>
    </div>
  )
}
