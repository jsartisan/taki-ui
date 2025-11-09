import { DateRangePicker } from "@/registry/new-york/ui/date-range-picker"

export default function DateRangePickerDisabled() {
  return (
    <DateRangePicker
      label="Trip dates"
      description="This field is disabled."
      isDisabled
    />
  )
}
