import { DateField } from "@/registry/new-york-v4/ui/date-field"

export default function DateFieldDisabled() {
  return (
    <DateField
      label="Event date"
      description="This field is disabled."
      isDisabled
    />
  )
}
