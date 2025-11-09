"use client"

import React from "react"

import { GridList } from "@/registry/new-york/ui/grid-list"

export default function GridListEmpty() {
  return (
    <GridList
      aria-label="Search results"
      renderEmptyState={() => (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="text-muted-foreground text-sm">No results found</p>
        </div>
      )}
      className="w-64"
    >
      {[]}
    </GridList>
  )
}
