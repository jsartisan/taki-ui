import { DateRangePicker } from "@/registry/new-york-v4/ui/date-range-picker"

export default function DateRangePickerDisabled() {
  return (
    <DateRangePicker
      label="Trip dates"
      description="This field is disabled."
      isDisabled
    />
  )
}
