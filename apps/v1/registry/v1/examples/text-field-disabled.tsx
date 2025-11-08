import { TextField } from "@/registry/v1/ui/text-field"

export default function TextFieldDisabled() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField label="Username" defaultValue="johndoe" isDisabled />
    </div>
  )
}
