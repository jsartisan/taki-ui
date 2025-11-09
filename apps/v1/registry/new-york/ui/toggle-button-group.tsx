"use client"

import React from "react"
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonProps as AriaToggleButtonProps,
  composeRenderProps,
  Group,
  GroupProps,
} from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

import { toggleButtonVariants } from "@/registry/new-york/ui/toggle-button"

const ToggleButtonGroupContext = React.createContext<
  VariantProps<typeof toggleButtonVariants>
>({
  size: "default",
  variant: "default",
})

export interface ToggleButtonGroupProps extends GroupProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const toggleButtonGroupVariants = tv({
  base: "group/toggle-button-group flex w-fit items-center rounded-md",
  variants: {
    variant: {
      default: "",
      outline: "shadow-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export function ToggleButtonGroup({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ToggleButtonGroupProps) {
  return (
    <Group
      data-slot="toggle-button-group"
      data-variant={variant}
      data-size={size}
      className={toggleButtonGroupVariants({ variant, className })}
      {...props}
    >
      <ToggleButtonGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleButtonGroupContext.Provider>
    </Group>
  )
}

export interface ToggleButtonGroupItemProps extends AriaToggleButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

const toggleButtonGroupItemVariants = tv({
  base: "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10",
  variants: {
    variant: {
      default: "",
      outline: "border-l-0 first:border-l",
    },
  },
})

export function ToggleButtonGroupItem({
  className,
  variant,
  size,
  ...props
}: ToggleButtonGroupItemProps) {
  const context = React.useContext(ToggleButtonGroupContext)
  const finalVariant = context.variant || variant
  const finalSize = context.size || size

  return (
    <AriaToggleButton
      data-slot="toggle-button-group-item"
      data-variant={finalVariant}
      data-size={finalSize}
      {...props}
      className={composeRenderProps(props.className, (cls, renderProps) =>
        toggleButtonVariants({
          ...renderProps,
          variant: finalVariant as "default" | "outline",
          size: finalSize as "default" | "sm" | "lg",
          className: toggleButtonGroupItemVariants({
            variant: finalVariant as "default" | "outline",
            className: cls,
          }),
        })
      )}
    />
  )
}
