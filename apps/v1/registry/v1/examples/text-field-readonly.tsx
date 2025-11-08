import { TextField } from "@/registry/v1/ui/text-field"

export default function TextFieldReadOnly() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField
        label="User ID"
        defaultValue="12345"
        isReadOnly
        description="This field is read-only and cannot be edited."
      />
    </div>
  )
}
