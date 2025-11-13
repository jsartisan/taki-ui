"use client"

import React from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  composeRenderProps,
  DateValue,
  Group,
  ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "../lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
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

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn("flex flex-col gap-1", className)
      )}
    >
      {({ isInvalid }) => (
        <>
          {label && <FieldLabel>{label}</FieldLabel>}
          <InputGroup>
            <DateInput
              data-slot="input-group-control"
              className={inputGroupInputStyles}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost">
                <ChevronDown className="size-4" aria-hidden="true" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          {description && <FieldDescription>{description}</FieldDescription>}
          <FieldError>{errorMessage}</FieldError>
          <Popover>
            <Dialog>
              <Calendar className="p-0" />
            </Dialog>
          </Popover>
        </>
      )}
    </AriaDatePicker>
  )
}
