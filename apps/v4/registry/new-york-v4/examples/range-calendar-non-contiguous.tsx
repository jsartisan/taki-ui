"use client"

import { RangeCalendar } from "@/registry/new-york-v4/ui/range-calendar"

export default function RangeCalendarNonContiguous() {
  return (
    <RangeCalendar aria-label="Select a date range" allowsNonContiguousRanges />
  )
}
