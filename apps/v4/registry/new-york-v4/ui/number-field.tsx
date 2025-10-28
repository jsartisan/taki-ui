"use client"

import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"

import { cn, composeTailwindRenderProps } from "../lib/utils"
import { ButtonGroup } from "./button-group"
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  fieldVariants,
} from "./field"
import { Input } from "./input"
import { InputGroup, InputGroupButton, InputGroupInput } from "./input-group"

export interface NumberFieldProps
  extends AriaNumberFieldProps,
    VariantProps<typeof fieldVariants> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function NumberField({
  label,
  description,
  errorMessage,
  orientation = "vertical",
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField {...props} className={fieldVariants({ orientation })}>
      <FieldLabel>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <div className="flex flex-col rounded-r-[inherit] border-s">
          <StepperButton slot="increment" className="rounded-tr-[inherit]">
            <ChevronUp aria-hidden className="h-4 w-4" />
          </StepperButton>
          <div className="border-b" />
          <StepperButton slot="decrement" className="rounded-br-[inherit]">
            <ChevronDown aria-hidden className="h-4 w-4" />
          </StepperButton>
        </div>
      </InputGroup>

      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  )
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "pressed:bg-gray-100 dark:pressed:bg-zinc-800 box-border cursor-default border-0 px-0.5 py-0 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]",
        props.className
      )}
    />
  )
}
