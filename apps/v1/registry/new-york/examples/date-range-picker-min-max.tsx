"use client"

import { getLocalTimeZone, today } from "@internationalized/date"

import { DateRangePicker } from "@/registry/new-york/ui/date-range-picker"

export default function DateRangePickerMinMax() {
  const now = today(getLocalTimeZone())

  return (
    <DateRangePicker
      label="Rental period"
      description="Select a date range within the next 90 days."
      minValue={now}
      maxValue={now.add({ days: 90 })}
    />
  )
}
