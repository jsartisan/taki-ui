import { DatePicker } from "@/registry/v1/ui/date-picker"

export default function DatePickerGranularity() {
  return (
    <div className="space-y-4">
      <DatePicker
        label="Date only"
        description="Year, month, and day."
        granularity="day"
      />
      <DatePicker
        label="Month and year"
        description="Month and year only."
        granularity="month"
      />
    </div>
  )
}
