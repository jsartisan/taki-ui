import { TextField } from "@/registry/new-york/ui/text-field"

export default function TextFieldDisabled() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField label="Username" defaultValue="johndoe" isDisabled />
    </div>
  )
}
