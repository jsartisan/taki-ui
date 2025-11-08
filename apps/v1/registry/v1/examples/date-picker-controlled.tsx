"use client"

import { useState } from "react"
import { parseDate } from "@internationalized/date"

import { DatePicker } from "@/registry/new-york-v4/ui/date-picker"

export default function DatePickerControlled() {
  const [value, setValue] = useState(parseDate("2024-12-25"))

  return (
    <div className="space-y-4">
      <DatePicker
        label="Travel date"
        description="Select your travel date."
        value={value}
        onChange={setValue}
      />
      <p className="text-muted-foreground text-sm">
        Selected date: {value ? value.toString() : "None"}
      </p>
    </div>
  )
}
