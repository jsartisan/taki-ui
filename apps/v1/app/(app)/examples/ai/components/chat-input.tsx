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
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/new-york-v4/ai-elements/prompt-input"
import { cn } from "@/registry/new-york-v4/lib/utils"

export function ChatInput(props: { className?: string } = {}) {
  const [text, setText] = useState("")
  const [useWebSearch, setUseWebSearch] = useState(false)
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready"
  )

  const handleSubmit = (message: { text?: string; files?: File[] }) => {
    if (!message.text?.trim() && !message.files?.length) {
      return
    }

    console.log("Submitted:", {
      text: message.text,
      files: message.files,
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
    <div className={cn("w-full", props.className)}>
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
          </PromptInputTools>
          <PromptInputSubmit
            isDisabled={!text && status === "ready"}
            status={status}
          />
        </PromptInputFooter>
      </PromptInput>
    </div>
  )
}
