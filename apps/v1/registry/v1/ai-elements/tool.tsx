"use client"

import type { ComponentProps, ReactNode } from "react"
import { isValidElement } from "react"
import type { ToolUIPart } from "ai"
import {
  CheckCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  ClockIcon,
  WrenchIcon,
  XCircleIcon,
} from "lucide-react"
import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/v1/ui/badge"
import {
  Disclosure,
  DisclosurePanel,
} from "@/registry/v1/ui/disclosure"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "./code-block"

export type ToolProps = ComponentProps<typeof Disclosure>

export const Tool = ({ className, ...props }: ToolProps) => (
  <Disclosure
    className={cn("not-prose mb-4 w-full rounded-md border", className)}
    {...props}
  />
)

export type ToolHeaderProps = {
  title?: string
  type: ToolUIPart["type"]
  state: ToolUIPart["state"]
  className?: string
}

const getStatusBadge = (status: ToolUIPart["state"]) => {
  const labels = {
    "input-streaming": "Pending",
    "input-available": "Running",
    "output-available": "Completed",
    "output-error": "Error",
  } as const

  const icons = {
    "input-streaming": <CircleIcon className="size-4" />,
    "input-available": <ClockIcon className="size-4 animate-pulse" />,
    "output-available": <CheckCircleIcon className="size-4 text-green-600" />,
    "output-error": <XCircleIcon className="size-4 text-red-600" />,
  } as const

  return (
    <Badge className="gap-1.5 rounded-full text-xs" variant="secondary">
      {icons[status]}
      {labels[status]}
    </Badge>
  )
}

export const ToolHeader = ({
  className,
  title,
  type,
  state,
  ...props
}: ToolHeaderProps) => (
  <Button
    slot="trigger"
    className={cn(
      "flex w-full items-center justify-between gap-4 p-3",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      <WrenchIcon className="text-muted-foreground size-4" />
      <span className="text-sm font-medium">
        {title ?? type.split("-").slice(1).join("-")}
      </span>
      {getStatusBadge(state)}
    </div>
    <ChevronDownIcon className="text-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-180" />
  </Button>
)

export type ToolContentProps = ComponentProps<typeof DisclosurePanel>

export const ToolContent = ({ className, ...props }: ToolContentProps) => (
  <DisclosurePanel
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in outline-none",
      className
    )}
    {...props}
  />
)

export type ToolInputProps = ComponentProps<"div"> & {
  input: ToolUIPart["input"]
}

export const ToolInput = ({ className, input, ...props }: ToolInputProps) => (
  <div className={cn("space-y-2 overflow-hidden p-4", className)} {...props}>
    <h4 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
      Parameters
    </h4>
    <div className="bg-muted/50 rounded-md">
      <CodeBlock
        data={[
          {
            code: JSON.stringify(input, null, 2),
            language: "json",
            filename: "input.json",
          },
        ]}
      >
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.filename} value={item.filename}>
              <CodeBlockContent language={item.language as any}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    </div>
  </div>
)

export type ToolOutputProps = ComponentProps<"div"> & {
  output: ToolUIPart["output"]
  errorText: ToolUIPart["errorText"]
}

export const ToolOutput = ({
  className,
  output,
  errorText,
  ...props
}: ToolOutputProps) => {
  if (!(output || errorText)) {
    return null
  }

  let Output = <div>{output as ReactNode}</div>

  if (typeof output === "object" && !isValidElement(output)) {
    Output = (
      <CodeBlock
        data={[
          {
            code: JSON.stringify(output, null, 2),
            language: "json",
            filename: "output.json",
          },
        ]}
      >
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.filename} value={item.filename}>
              <CodeBlockContent language={item.language as any}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    )
  } else if (typeof output === "string") {
    Output = (
      <CodeBlock
        data={[
          {
            code: output,
            language: "json",
            filename: "output.json",
          },
        ]}
      >
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.filename} value={item.filename}>
              <CodeBlockContent language={item.language as any}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    )
  }

  return (
    <div className={cn("space-y-2 p-4", className)} {...props}>
      <h4 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
        {errorText ? "Error" : "Result"}
      </h4>
      <div
        className={cn(
          "overflow-x-auto rounded-md text-xs [&_table]:w-full",
          errorText
            ? "bg-destructive/10 text-destructive"
            : "bg-muted/50 text-foreground"
        )}
      >
        {errorText && <div>{errorText}</div>}
        {Output}
      </div>
    </div>
  )
}
