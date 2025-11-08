"use client"

import React from "react"

import { ListBox } from "@/registry/new-york-v4/ui/list-box"

export default function ListBoxEmpty() {
  return (
    <ListBox
      aria-label="Search results"
      renderEmptyState={() => (
        <div className="flex min-h-[150px] items-center justify-center">
          <p className="text-muted-foreground text-sm">No results found</p>
        </div>
      )}
      className="w-64"
    >
      {[]}
    </ListBox>
  )
}
