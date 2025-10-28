"use client"

import React from "react"
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"

import { composeTailwindRenderProps } from "../lib/utils"
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
      className={composeTailwindRenderProps(
        props.className,
        fieldVariants({ orientation })
      )}
    >
      <FieldLabel>{label}</FieldLabel>
      <Input placeholder={placeholder} />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  )
}
