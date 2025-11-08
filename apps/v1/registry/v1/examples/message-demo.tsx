import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/registry/new-york-v4/ai-elements/message"

export default function MessageDemo() {
  return (
    <div className="space-y-4">
      <Message from="user">
        <MessageAvatar src="https://github.com/shadcn.png" name="User" />
        <MessageContent>
          Hello! Can you help me understand how to use AI Elements in my
          project?
        </MessageContent>
      </Message>

      <Message from="assistant">
        <MessageAvatar src="/avatars/shadcn.jpg" name="AI" />
        <MessageContent>
          Of course! AI Elements are pre-built components designed for AI
          interfaces. They work seamlessly with the rest of the component
          library.
        </MessageContent>
      </Message>
    </div>
  )
}
