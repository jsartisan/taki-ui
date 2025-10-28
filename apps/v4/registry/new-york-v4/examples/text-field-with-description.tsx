import { TextField } from "@/registry/new-york-v4/ui/text-field"

export default function TextFieldWithDescription() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField
        label="Email"
        description="We'll never share your email with anyone else."
        placeholder="you@example.com"
        type="email"
      />
    </div>
  )
}
