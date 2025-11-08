import { Input } from "@/registry/v1/ui/input"
import { Label } from "@/registry/v1/ui/label"

export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
