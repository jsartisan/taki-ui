import { TextField } from "@/registry/v1/ui/text-field"

export default function TextFieldTypes() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField label="Email" type="email" placeholder="you@example.com" />
      <TextField label="Password" type="password" placeholder="••••••••" />
      <TextField label="URL" type="url" placeholder="https://example.com" />
      <TextField label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
    </div>
  )
}
