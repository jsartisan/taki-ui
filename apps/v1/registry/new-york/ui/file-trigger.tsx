"use client"

import React from "react"
import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
} from "react-aria-components"

export interface FileTriggerProps extends AriaFileTriggerProps {}

export function FileTrigger(props: FileTriggerProps) {
  return <AriaFileTrigger {...props} />
}
