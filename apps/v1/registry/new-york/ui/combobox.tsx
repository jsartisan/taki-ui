"use client"

import React from "react"
import { ChevronDown } from "lucide-react"
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Button,
  composeRenderProps,
  Input,
  ListBox,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn } from "../lib/utils"
import { FieldDescription, FieldError, FieldLabel } from "./field"
import { DropdownItem, DropdownSection, DropdownSectionProps } from "./list-box"
import { Popover } from "./popover"

const comboBoxStyles = tv({
  base: "group relative flex flex-col gap-1",
})

const inputWrapperStyles = tv({
  base: "border-input  [&_svg:not([class*='text-'])]:text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center gap-2 rounded-md border bg-transparent pr-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    size: {
      default: "h-9",
      sm: "h-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const inputStyles = tv({
  base: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex-1 bg-transparent px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed md:text-sm",
})

const buttonStyles = tv({
  base: "flex items-center justify-center outline-none transition-colors",
})

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, "children"> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  size?: "default" | "sm"
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  items,
  size = "default",
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(comboBoxStyles(), className)
      )}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <div className={inputWrapperStyles({ size })}>
        <Input placeholder={placeholder} className={inputStyles()} />
        <Button className={buttonStyles()}>
          <ChevronDown aria-hidden />
        </Button>
      </div>
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="w-56 min-w-(--trigger-width)">
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-hidden [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  )
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />
}

export function ComboBoxSection<T extends object>(
  props: DropdownSectionProps<T>
) {
  return <DropdownSection {...props} />
}
