"use client"

import * as React from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
} from "react-aria-components"

import { cn } from "@/registry/new-york/lib/utils"

function Breadcrumbs<T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      data-slot="breadcrumb"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function Breadcrumb({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <AriaBreadcrumb
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        data-slot="breadcrumb-link"
        className={cn(
          "transition-colors outline-none",
          "hover:text-foreground",
          "data-[current]:text-foreground data-[current]:font-normal",
          "data-[focus-visible]:ring-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
          className
        )}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </span>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumbs,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
