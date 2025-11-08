"use client"

import { useState } from "react"
import { parseDate } from "@internationalized/date"

import { DateField } from "@/registry/v1/ui/date-field"

export default function DateFieldControlled() {
  const [value, setValue] = useState(parseDate("2024-01-15"))

  return (
    <div className="space-y-4">
      <DateField
        label="Appointment date"
        description="Select your appointment date."
        value={value}
        onChange={setValue}
      />
      <p className="text-muted-foreground text-sm">
        Selected date: {value ? value.toString() : "None"}
      </p>
    </div>
  )
}
