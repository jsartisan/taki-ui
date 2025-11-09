"use client"

import React from "react"
import { CalendarIcon } from "lucide-react"
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  composeRenderProps,
  DateValue,
  ValidationResult,
} from "react-aria-components"

import { cn } from "../lib/utils"
import { DateInput } from "./date-field"
import { Dialog } from "./dialog"
import { FieldDescription, FieldError, FieldLabel } from "./field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  inputGroupInputStyles,
} from "./input-group"
import { Popover } from "./popover"
import { RangeCalendar } from "./range-calendar"

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn("flex flex-col gap-1", className)
      )}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <InputGroup>
        <DateInput
          slot="start"
          data-slot="input-group-control"
          className={inputGroupInputStyles}
        />
        <span className="text-foreground" aria-hidden="true">
          –
        </span>
        <DateInput
          slot="end"
          data-slot="input-group-control"
          className={inputGroupInputStyles}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" variant="ghost">
            <CalendarIcon className="size-4" aria-hidden="true" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar className="p-0" />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  )
}
