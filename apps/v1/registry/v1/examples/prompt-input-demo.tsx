"use client"

import { useState } from "react"
import { GlobeIcon } from "lucide-react"

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputModelSelect,
  PromptInputModelSelectItem,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/new-york-v4/ai-elements/prompt-input"

const models = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "claude-opus-4-20250514", name: "Claude 4 Opus" },
]

export default function PromptInputDemo() {
  const [text, setText] = useState("")
  const [model, setModel] = useState("gpt-4o")
  const [useWebSearch, setUseWebSearch] = useState(false)
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready"
  )

  const handleSubmit = (message: { text?: string; files?: any[] }) => {
    if (!message.text?.trim() && !message.files?.length) {
      return
    }

    console.log("Submitted:", {
      text: message.text,
      files: message.files,
      model,
      webSearch: useWebSearch,
    })

    setStatus("submitted")
    setTimeout(() => {
      setStatus("streaming")
      setTimeout(() => {
        setStatus("ready")
        setText("")
      }, 2000)
    }, 1000)
  }

  return (
    <div className="w-full max-w-2xl">
      <PromptInput
        onSubmit={handleSubmit}
        className="relative"
        globalDrop
        multiple
      >
        <PromptInputBody>
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>
          <PromptInputTextarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Ask me anything..."
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>
            <PromptInputSpeechButton onTranscriptionChange={setText} />
            <PromptInputButton
              onClick={() => setUseWebSearch(!useWebSearch)}
              variant={useWebSearch ? "default" : "ghost"}
            >
              <GlobeIcon size={16} />
              <span>Search</span>
            </PromptInputButton>
            <PromptInputModelSelect
              selectedKey={model}
              onSelectionChange={(key) => setModel(key as string)}
              items={models}
            >
              {(item) => (
                <PromptInputModelSelectItem id={item.id}>
                  {item.name}
                </PromptInputModelSelectItem>
              )}
            </PromptInputModelSelect>
          </PromptInputTools>
          <PromptInputSubmit
            disabled={!text && status === "ready"}
            status={status}
          />
        </PromptInputFooter>
      </PromptInput>
    </div>
  )
}
