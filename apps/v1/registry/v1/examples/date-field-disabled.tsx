import { DateField } from "@/registry/v1/ui/date-field"

export default function DateFieldDisabled() {
  return (
    <DateField
      label="Event date"
      description="This field is disabled."
      isDisabled
    />
  )
}
