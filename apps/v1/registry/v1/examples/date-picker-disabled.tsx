import { DatePicker } from "@/registry/v1/ui/date-picker"

export default function DatePickerDisabled() {
  return (
    <DatePicker
      label="Event date"
      description="This field is disabled."
      isDisabled
    />
  )
}
