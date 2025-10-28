import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"

export default function MessageFlat() {
  return (
    <div className="space-y-4">
      <Message from="user">
        <MessageAvatar src="https://github.com/shadcn.png" name="User" />
        <MessageContent variant="flat">
          This is a message with flat variant.
        </MessageContent>
      </Message>

      <Message from="assistant">
        <MessageAvatar src="/avatars/shadcn.jpg" name="AI" />
        <MessageContent variant="flat">
          The flat variant provides a different visual style for messages.
        </MessageContent>
      </Message>
    </div>
  )
}
