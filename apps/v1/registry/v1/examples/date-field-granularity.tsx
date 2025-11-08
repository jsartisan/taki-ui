import { DateField } from "@/registry/v1/ui/date-field"

export default function DateFieldGranularity() {
  return (
    <div className="space-y-4">
      <DateField
        label="Date only"
        description="Year, month, and day."
        granularity="day"
      />
      <DateField
        label="Month and year"
        description="Month and year only."
        granularity="month"
      />
    </div>
  )
}
