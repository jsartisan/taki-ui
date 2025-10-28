"use client"

import React from "react"
import { isEmpty } from "lodash"
import { X } from "lucide-react"
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Button,
  ValidationResult,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

import { cn, composeTailwindRenderProps } from "../lib/utils"
import {
  FieldDescription,
  FieldError,
  FieldLabel,
  fieldVariants,
} from "./field"
import { Input } from "./input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./input-group"

export interface SearchFieldProps
  extends AriaSearchFieldProps,
    VariantProps<typeof fieldVariants> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

export const inputStyles = tv({
  base: [
    "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
  ],
  variants: {
    isEmpty: {
      true: "[&+div_button]:invisible ",
    },
  },
})

export function SearchField({
  label,
  description,
  errorMessage,
  placeholder = "Search...",
  className,
  orientation = "vertical",
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField
      {...props}
      className={composeTailwindRenderProps(
        className,
        fieldVariants({ orientation })
      )}
    >
      {(renderProps) => (
        <>
          {label && <FieldLabel>{label}</FieldLabel>}
          <InputGroup>
            <InputGroupInput
              placeholder={placeholder}
              className={inputStyles(renderProps)}
              {...renderProps}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs">
                <X />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          {description && <FieldDescription>{description}</FieldDescription>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </AriaSearchField>
  )
}
