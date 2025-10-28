import {
  OpenInChat,
  OpenInChatDropdown,
  OpenInChatLink,
  OpenInChatTrigger,
} from "@/registry/new-york-v4/ai-elements/open-in-chat"

export default function OpenInChatDemo() {
  const prompt = "How do I build a responsive layout with CSS Grid?"

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <OpenInChat prompt={prompt} provider="chatgpt">
          <OpenInChatLink />
        </OpenInChat>
      </div>

      <div className="flex items-center gap-2">
        <OpenInChat prompt={prompt}>
          <OpenInChatDropdown>
            <OpenInChatTrigger />
          </OpenInChatDropdown>
        </OpenInChat>
      </div>
    </div>
  )
}
