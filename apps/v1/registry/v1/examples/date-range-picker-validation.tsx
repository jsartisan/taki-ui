"use client"

import { DateRangePicker } from "@/registry/new-york-v4/ui/date-range-picker"

export default function DateRangePickerValidation() {
  return (
    <DateRangePicker
      label="Vacation dates"
      description="Select your vacation start and end dates."
      isRequired
      errorMessage="Please select a valid date range."
    />
  )
}
