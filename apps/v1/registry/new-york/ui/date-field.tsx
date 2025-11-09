"use client"

import React from "react"
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  composeRenderProps,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "../lib/utils"
import { FieldDescription, FieldError, FieldLabel } from "./field"
import { inputStyles } from "./input"

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn("flex flex-col gap-1", className)
      )}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <DateInput />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  )
}

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0 rounded-xs outline-0 forced-color-adjust-none caret-transparent text-foreground",
  variants: {
    isPlaceholder: {
      true: "text-muted-foreground italic",
    },
    isDisabled: {
      true: "text-muted-foreground opacity-50 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-primary text-primary-foreground forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
  },
})

const dateInputStyles = tv({
  extend: inputStyles,
  base: "flex h-9 items-center",
  variants: {
    isFocusWithin: {
      true: "border-ring ring-ring/50 ring-[3px]",
    },
  },
})

export function DateInput(props: Omit<DateInputProps, "children">) {
  const { className, ...rest } = props

  return (
    <AriaDateInput
      data-slot="input"
      className={composeRenderProps(className, (className, renderProps) =>
        dateInputStyles({
          ...renderProps,
          className,
        })
      )}
      {...rest}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  )
}
