"use client"

import { getLocalTimeZone, today } from "@internationalized/date"

import { DatePicker } from "@/registry/new-york/ui/date-picker"

export default function DatePickerMinMax() {
  const now = today(getLocalTimeZone())

  return (
    <DatePicker
      label="Booking date"
      description="Select a date within the next 30 days."
      minValue={now}
      maxValue={now.add({ days: 30 })}
    />
  )
}
