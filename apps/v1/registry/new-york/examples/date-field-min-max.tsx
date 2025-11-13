"use client"

import { getLocalTimeZone, today } from "@internationalized/date"

import { DateField } from "@/registry/new-york/ui/date-field"

export default function DateFieldMinMax() {
  const now = today(getLocalTimeZone())

  return (
    <DateField
      label="Meeting date"
      description="Select a date within the next 7 days."
      minValue={now}
      maxValue={now.add({ days: 7 })}
    />
  )
}
