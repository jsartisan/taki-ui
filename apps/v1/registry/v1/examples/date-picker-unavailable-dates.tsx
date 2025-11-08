"use client"

import { DateValue, getLocalTimeZone, today } from "@internationalized/date"

import { DatePicker } from "@/registry/new-york-v4/ui/date-picker"

export default function DatePickerUnavailableDates() {
  const now = today(getLocalTimeZone())

  const isDateUnavailable = (date: DateValue) => {
    const day = date.toDate(getLocalTimeZone()).getDay()
    return day === 0 || day === 6 // Disable weekends
  }

  return (
    <DatePicker
      label="Meeting date"
      description="Weekends are unavailable."
      minValue={now}
      isDateUnavailable={isDateUnavailable}
    />
  )
}
