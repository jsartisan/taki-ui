import { Button } from "@/registry/v1/ui/button"
import { Textarea } from "@/registry/v1/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
