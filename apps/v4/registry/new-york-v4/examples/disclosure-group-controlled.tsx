"use client"

import { useState } from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/new-york-v4/ui/disclosure"

export default function DisclosureGroupControlled() {
  const [expandedKeys, setExpandedKeys] = useState<Set<React.Key>>(
    new Set(["overview"])
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onPress={() => setExpandedKeys(new Set(["overview", "details"]))}
        >
          Expand All
        </Button>
        <Button
          size="sm"
          variant="outline"
          onPress={() => setExpandedKeys(new Set())}
        >
          Collapse All
        </Button>
      </div>
      <DisclosureGroup
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
        className="w-full max-w-xl"
      >
        <Disclosure id="overview">
          <DisclosureHeader>Project Overview</DisclosureHeader>
          <DisclosurePanel>
            This project aims to build a modern web application using the latest
            technologies.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="details">
          <DisclosureHeader>Technical Details</DisclosureHeader>
          <DisclosurePanel>
            Built with React, TypeScript, and Tailwind CSS. Uses React Aria for
            accessibility.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure id="timeline">
          <DisclosureHeader>Timeline</DisclosureHeader>
          <DisclosurePanel>
            Phase 1: Q1 2025 - Planning and design
            <br />
            Phase 2: Q2 2025 - Development
            <br />
            Phase 3: Q3 2025 - Testing and launch
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </div>
  )
}
