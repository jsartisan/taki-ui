"use client"

import type { ComponentProps } from "react"
import { BookIcon, ChevronDownIcon } from "lucide-react"
import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Disclosure, DisclosurePanel } from "@/registry/v1/ui/disclosure"

export type SourcesProps = ComponentProps<"div">

export const Sources = ({ className, ...props }: SourcesProps) => (
  <Disclosure
    className={cn("not-prose text-primary mb-4 text-xs", className)}
    {...props}
  />
)

export type SourcesTriggerProps = ComponentProps<typeof Button> & {
  count: number
}

export const SourcesTrigger = ({
  className,
  count,
  children,
  ...props
}: SourcesTriggerProps) => (
  <Button
    slot="trigger"
    className={cn("flex items-center gap-2", className)}
    {...props}
  >
    {children ?? (
      <>
        <p className="font-medium">Used {count} sources</p>
        <ChevronDownIcon className="h-4 w-4" />
      </>
    )}
  </Button>
)

export type SourcesContentProps = ComponentProps<typeof DisclosurePanel>

export const SourcesContent = ({
  className,
  ...props
}: SourcesContentProps) => (
  <DisclosurePanel
    className={cn(
      "mt-3 flex w-fit flex-col gap-2",
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 data-[state=closed]:animate-out data-[state=open]:animate-in outline-none",
      className
    )}
    {...props}
  />
)

export type SourceProps = ComponentProps<"a">

export const Source = ({ href, title, children, ...props }: SourceProps) => (
  <a
    className="flex items-center gap-2"
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children ?? (
      <>
        <BookIcon className="h-4 w-4" />
        <span className="block font-medium">{title}</span>
      </>
    )}
  </a>
)
