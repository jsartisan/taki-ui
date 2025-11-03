import {
  OpenIn,
  OpenInChatGPT,
  OpenInClaude,
  OpenInContent,
  OpenInCursor,
  OpenInSeparator,
  OpenInTrigger,
  OpenInv0,
} from "@/registry/new-york-v4/ai-elements/open-in-chat"

export default function OpenInChatDemo() {
  const query = "How do I build a responsive layout with CSS Grid?"

  return (
    <div className="flex items-center gap-2">
      <OpenIn query={query}>
        <OpenInTrigger />
        <OpenInContent>
          <OpenInChatGPT />
          <OpenInClaude />
          <OpenInCursor />
          <OpenInSeparator />
          <OpenInv0 />
        </OpenInContent>
      </OpenIn>
    </div>
  )
}
