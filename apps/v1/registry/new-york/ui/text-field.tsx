"use client"

import React from "react"
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  composeRenderProps,
  ValidationResult,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"

import { cn } from "../lib/utils"
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  fieldVariants,
} from "./field"
import { Input } from "./input"

export interface TextFieldProps
  extends AriaTextFieldProps,
    VariantProps<typeof fieldVariants> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export function TextField({
  label,
  description,
  errorMessage,
  orientation = "vertical",
  placeholder,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(fieldVariants({ orientation }), className)
      )}
    >
      <FieldLabel>{label}</FieldLabel>
      <Input placeholder={placeholder} />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  )
}
