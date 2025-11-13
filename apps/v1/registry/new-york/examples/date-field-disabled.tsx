import { DateField } from "@/registry/new-york/ui/date-field"

export default function DateFieldDisabled() {
  return (
    <DateField
      label="Event date"
      description="This field is disabled."
      isDisabled
    />
  )
}
