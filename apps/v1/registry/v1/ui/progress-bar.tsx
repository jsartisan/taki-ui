"use client"

import React from "react"
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components"

import { composeTailwindRenderProps } from "../lib/utils"
import { FieldLabel } from "./field"

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1"
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <FieldLabel>{label}</FieldLabel>
            <span className="text-muted-foreground text-sm">{valueText}</span>
          </div>
          <div className="bg-muted relative h-2 w-64 overflow-hidden rounded-full outline outline-1 -outline-offset-1 outline-transparent">
            <div
              className={`bg-primary absolute top-0 h-full rounded-full forced-colors:bg-[Highlight] ${isIndeterminate ? "animate-in slide-in-from-left-[20rem] repeat-infinite left-full duration-1000 ease-out" : "left-0"}`}
              style={{ width: (isIndeterminate ? 40 : percentage) + "%" }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  )
}
