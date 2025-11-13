"use client"

import React from "react"
import {
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn, focusRing } from "../lib/utils"
import {
  cellStyles as calendarCellStyles,
  CalendarGridHeader,
  CalendarHeader,
} from "./calendar"

const cellStyles = tv({
  extend: calendarCellStyles,
  variants: {
    isSelected: {
      false: "hover:bg-accent hover:text-accent-foreground",
      true: [
        "bg-primary relative text-primary-foreground rounded-none hover:bg-primary  hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        // these styles are required to fill the gap between the cells for range selection
        "after:content-[''] after:h-full after:w-1 after:absolute after:-right-1 after:bg-primary",
      ],
    },
    isSelectionStart: {
      true: "rounded-l-md",
    },
    isSelectionEnd: {
      true: "rounded-r-md after:content-none",
    },
  },
})

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string
  className?: string
}

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  className,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <AriaRangeCalendar
      className={cn("flex w-fit flex-col gap-3 p-3", className)}
      {...props}
    >
      <CalendarHeader />
      <CalendarGrid className="mt-1 w-full border-collapse space-y-1">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} className={cellStyles} />}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-destructive text-sm">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  )
}
