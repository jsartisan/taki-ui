"use client"

import { nanoid } from "nanoid"

import {
  Branch,
  BranchMessages,
  BranchNext,
  BranchPage,
  BranchPrevious,
  BranchSelector,
} from "@/registry/new-york/ai-elements/branch"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york/ai-elements/message"

const userMessages = [
  {
    id: nanoid(),
    content: "What are the key strategies for optimizing React performance?",
  },
  {
    id: nanoid(),
    content: "How can I improve the performance of my React application?",
  },
  {
    id: nanoid(),
    content: "What performance optimization techniques should I use in React?",
  },
]

const assistantMessages = [
  {
    id: nanoid(),
    content:
      "Here's the first response to your question. This approach focuses on performance optimization.",
  },
  {
    id: nanoid(),
    content:
      "Here's an alternative response. This approach emphasizes code readability and maintainability over pure performance.",
  },
  {
    id: nanoid(),
    content:
      "And here's a third option. This balanced approach considers both performance and maintainability, making it suitable for most use cases.",
  },
]

export default function BranchDemo() {
  const handleBranchChange = (branchIndex: number) => {
    console.log("Branch changed to:", branchIndex)
  }

  return (
    <div style={{ height: "300px" }}>
      <Branch defaultBranch={0} onBranchChange={handleBranchChange}>
        <BranchMessages>
          {userMessages.map((message) => (
            <Message from="user" key={message.id}>
              <MessageContent>{message.content}</MessageContent>
              <MessageAvatar
                name="Hayden Bleasel"
                src="https://github.com/haydenbleasel.png"
              />
            </Message>
          ))}
        </BranchMessages>
        <BranchSelector from="user">
          <BranchPrevious />
          <BranchPage />
          <BranchNext />
        </BranchSelector>
      </Branch>

      <Branch defaultBranch={0} onBranchChange={handleBranchChange}>
        <BranchMessages>
          {assistantMessages.map((message) => (
            <Message from="assistant" key={message.id}>
              <MessageContent>{message.content}</MessageContent>
              <MessageAvatar name="AI" src="https://github.com/openai.png" />
            </Message>
          ))}
        </BranchMessages>
        <BranchSelector from="assistant">
          <BranchPrevious />
          <BranchPage />
          <BranchNext />
        </BranchSelector>
      </Branch>
    </div>
  )
}
