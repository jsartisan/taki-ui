"use client"

import { getLocalTimeZone, isWeekend, today } from "@internationalized/date"
import { useLocale } from "react-aria-components"

import { RangeCalendar } from "@/registry/new-york/ui/range-calendar"

export default function RangeCalendarUnavailableDates() {
  const now = today(getLocalTimeZone())
  const { locale } = useLocale()

  return (
    <RangeCalendar
      aria-label="Select a date range"
      minValue={now}
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}
