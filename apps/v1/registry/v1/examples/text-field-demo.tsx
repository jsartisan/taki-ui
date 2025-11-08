import { TextField } from "@/registry/v1/ui/text-field"

export default function TextFieldDemo() {
  return (
    <TextField
      label="Name"
      placeholder="Enter your name"
      defaultValue="John Doe"
    />
  )
}
