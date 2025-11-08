"use client"

import { getLocalTimeZone, isWeekend, today } from "@internationalized/date"
import { useLocale } from "react-aria-components"

import { DateRangePicker } from "@/registry/new-york-v4/ui/date-range-picker"

export default function DateRangePickerUnavailableDates() {
  const now = today(getLocalTimeZone())
  const { locale } = useLocale()

  return (
    <DateRangePicker
      label="Conference dates"
      description="Weekends are unavailable."
      minValue={now}
      isDateUnavailable={(date) => isWeekend(date, locale)}
    />
  )
}
