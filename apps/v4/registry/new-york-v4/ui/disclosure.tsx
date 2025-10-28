"use client"

import React, { useContext } from "react"
import { ChevronDownIcon } from "lucide-react"
import {
  Disclosure as AriaDisclosure,
  DisclosureGroup as AriaDisclosureGroup,
  DisclosureGroupProps as AriaDisclosureGroupProps,
  DisclosurePanel as AriaDisclosurePanel,
  DisclosurePanelProps as AriaDisclosurePanelProps,
  DisclosureProps as AriaDisclosureProps,
  Button,
  composeRenderProps,
  DisclosureGroupStateContext,
  DisclosureStateContext,
  Heading,
} from "react-aria-components"
import { tv } from "tailwind-variants"

import { composeTailwindRenderProps } from "../lib/utils"

const disclosure = tv({
  base: "group",
  variants: {
    isInGroup: {
      true: "border-b last:border-b-0",
    },
  },
})

const disclosureButton = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
  variants: {
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
  },
})

const chevron = tv({
  base: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
  variants: {
    isExpanded: {
      true: "rotate-180",
    },
  },
})

export interface DisclosureProps extends AriaDisclosureProps {
  children: React.ReactNode
}

export function Disclosure({ children, ...props }: DisclosureProps) {
  const isInGroup = useContext(DisclosureGroupStateContext) !== null
  return (
    <AriaDisclosure
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        disclosure({ ...renderProps, isInGroup, className })
      )}
    >
      {children}
    </AriaDisclosure>
  )
}

export interface DisclosureHeaderProps {
  children: React.ReactNode
}

export function DisclosureHeader({ children }: DisclosureHeaderProps) {
  const { isExpanded } = useContext(DisclosureStateContext)!
  return (
    <Heading className="flex">
      <Button
        slot="trigger"
        className={(renderProps) => disclosureButton({ ...renderProps })}
      >
        {children}
        <ChevronDownIcon aria-hidden className={chevron({ isExpanded })} />
      </Button>
    </Heading>
  )
}

export interface DisclosurePanelProps extends AriaDisclosurePanelProps {
  children: React.ReactNode
}

export function DisclosurePanel({ children, ...props }: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "h-(--disclosure-panel-height) overflow-hidden text-sm motion-safe:transition-[height]"
      )}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AriaDisclosurePanel>
  )
}

export interface DisclosureGroupProps extends AriaDisclosureGroupProps {
  children: React.ReactNode
}

export function DisclosureGroup({ children, ...props }: DisclosureGroupProps) {
  return (
    <AriaDisclosureGroup {...props} data-slot="disclosure-group">
      {children}
    </AriaDisclosureGroup>
  )
}
