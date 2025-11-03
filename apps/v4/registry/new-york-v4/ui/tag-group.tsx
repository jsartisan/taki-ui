"use client"

import React from "react"
import { XIcon } from "lucide-react"
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  composeRenderProps,
  TagList,
  TagListProps,
  Text,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { cn, focusRing } from "../lib/utils"
import { FieldDescription, FieldLabel } from "./field"

const tagStyles = tv({
  extend: focusRing,
  base: "transition-colors cursor-default text-xs rounded-md border px-2.5 py-1 flex items-center max-w-fit gap-1.5 outline-none",
  variants: {
    variant: {
      default:
        "border-input bg-background hover:bg-accent hover:text-accent-foreground",
      primary:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border-border bg-background hover:bg-accent hover:text-accent-foreground",
    },
    allowsRemoving: {
      true: "pr-1",
    },
    isSelected: {
      true: "bg-primary hover:text-primary-foreground  text-primary-foreground border-transparent hover:bg-primary/90",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, "children">,
    Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
  label?: string
  description?: string
  errorMessage?: string
}

export interface TagProps extends AriaTagProps {
  variant?: "default" | "primary" | "secondary" | "destructive" | "outline"
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup
      {...props}
      className={cn("flex flex-col gap-1", props.className)}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
        className="flex flex-wrap gap-1"
      >
        {children}
      </TagList>
      {description && <FieldDescription>{description}</FieldDescription>}
      {errorMessage && (
        <Text slot="errorMessage" className="text-destructive text-sm">
          {errorMessage}
        </Text>
      )}
    </AriaTagGroup>
  )
}

const removeButtonStyles = tv({
  extend: focusRing,
  base: "cursor-default rounded-sm transition-colors p-0.5 flex items-center justify-center hover:bg-muted/50 pressed:bg-muted",
})

export function Tag({ children, variant, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyles({ ...renderProps, className, variant })
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" className={removeButtonStyles}>
              <XIcon aria-hidden className="h-3 w-3" />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  )
}
