"use client"

import React from "react"
import {
  TimeField as AriaTimeField,
  TimeFieldProps as AriaTimeFieldProps,
  composeRenderProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components"

import { cn } from "../lib/utils"
import { DateInput } from "./date-field"
import { FieldDescription, FieldError, FieldLabel } from "./field"

export interface TimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn("flex flex-col gap-1", className)
      )}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <DateInput />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  )
}
