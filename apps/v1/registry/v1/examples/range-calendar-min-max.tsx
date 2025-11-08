"use client"

import { getLocalTimeZone, today } from "@internationalized/date"

import { RangeCalendar } from "@/registry/v1/ui/range-calendar"

export default function RangeCalendarMinMax() {
  const now = today(getLocalTimeZone())

  return (
    <RangeCalendar
      aria-label="Select a date range"
      minValue={now}
      maxValue={now.add({ weeks: 4 })}
    />
  )
}
