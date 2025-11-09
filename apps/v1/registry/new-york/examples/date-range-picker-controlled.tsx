"use client"

import { useState } from "react"
import { parseDate } from "@internationalized/date"

import { DateRangePicker } from "@/registry/new-york/ui/date-range-picker"

export default function DateRangePickerControlled() {
  const [value, setValue] = useState({
    start: parseDate("2024-12-20"),
    end: parseDate("2024-12-27"),
  })

  return (
    <div className="space-y-4">
      <DateRangePicker
        label="Hotel reservation"
        description="Select your check-in and check-out dates."
        value={value}
        onChange={setValue}
      />
      <p className="text-muted-foreground text-sm">
        Selected range: {value.start.toString()} to {value.end.toString()}
      </p>
    </div>
  )
}
