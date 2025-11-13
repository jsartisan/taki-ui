"use client"

import { useState } from "react"
import { parseDate } from "@internationalized/date"

import { RangeCalendar } from "@/registry/new-york/ui/range-calendar"

export default function RangeCalendarControlled() {
  const [value, setValue] = useState({
    start: parseDate("2024-12-15"),
    end: parseDate("2024-12-22"),
  })

  return (
    <div className="space-y-4">
      <RangeCalendar
        aria-label="Select a date range"
        value={value}
        onChange={setValue}
      />
      <p className="text-muted-foreground text-sm">
        Selected range: {value.start.toString()} to {value.end.toString()}
      </p>
    </div>
  )
}
