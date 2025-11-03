"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { IconArrowRight } from "@tabler/icons-react"
import { CornerDownLeftIcon, SquareDashedIcon } from "lucide-react"

import { type Color, type ColorPalette } from "@/lib/colors"
import { showMcpDocs } from "@/lib/flags"
import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { useIsMac } from "@/hooks/use-is-mac"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import { copyToClipboardWithMeta } from "@/components/copy-button"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Command,
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function CommandMenu({
  tree,
  colors,
  blocks,
  navItems,
  ...props
}: {
  tree: typeof source.pageTree
  colors: ColorPalette[]
  blocks?: { name: string; description: string; categories: string[] }[]
  navItems?: { href: string; label: string }[]
}) {
  const router = useRouter()
  const isMac = useIsMac()
  const [config] = useConfig()
  const [open, setOpen] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<
    "color" | "page" | "component" | "block" | null
  >(null)
  const [copyPayload, setCopyPayload] = React.useState("")
  const packageManager = config.packageManager || "pnpm"

  const handlePageHighlight = React.useCallback(
    (isComponent: boolean, item: { url: string; name?: React.ReactNode }) => {
      if (isComponent) {
        const componentName = item.url.split("/").pop()
        setSelectedType("component")
        setCopyPayload(
          `${packageManager} dlx shadcn@latest add ${componentName}`
        )
      } else {
        setSelectedType("page")
        setCopyPayload("")
      }
    },
    [packageManager, setSelectedType, setCopyPayload]
  )

  const handleColorHighlight = React.useCallback(
    (color: Color) => {
      setSelectedType("color")
      setCopyPayload(color.className)
    },
    [setSelectedType, setCopyPayload]
  )

  const handleBlockHighlight = React.useCallback(
    (block: { name: string; description: string; categories: string[] }) => {
      setSelectedType("block")
      setCopyPayload(`${packageManager} dlx shadcn@latest add ${block.name}`)
    },
    [setSelectedType, setCopyPayload, packageManager]
  )

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }

      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        runCommand(() => {
          if (selectedType === "color") {
            copyToClipboardWithMeta(copyPayload, {
              name: "copy_color",
              properties: { color: copyPayload },
            })
          }

          if (selectedType === "block") {
            copyToClipboardWithMeta(copyPayload, {
              name: "copy_npm_command",
              properties: { command: copyPayload, pm: packageManager },
            })
          }

          if (selectedType === "page" || selectedType === "component") {
            copyToClipboardWithMeta(copyPayload, {
              name: "copy_npm_command",
              properties: { command: copyPayload, pm: packageManager },
            })
          }
        })
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [copyPayload, runCommand, selectedType, packageManager])

  return (
    <>
      <Button
        variant="secondary"
        className={cn(
          "bg-surface text-foreground dark:bg-card relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64"
        )}
        onPress={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
          <KbdGroup>
            <Kbd className="border">{isMac ? "⌘" : "Ctrl"}</Kbd>
            <Kbd className="border">K</Kbd>
          </KbdGroup>
        </div>
      </Button>

      <Command>
        <CommandDialog
          isOpen={open}
          onOpenChange={setOpen}
          className="rounded-xl border-none bg-clip-padding pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800"
        >
          <CommandInput placeholder="Search documentation..." autoFocus />
          <CommandList
            className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5"
            emptyMessage="No results found."
          >
            {navItems && navItems.length > 0 && (
              <CommandGroup
                heading="Pages"
                className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
              >
                {navItems.map((item) => (
                  <CommandMenuItem
                    key={item.href}
                    textValue={`Navigation ${item.label} nav navigation ${item.label.toLowerCase()}`}
                    onHighlight={() => {
                      setSelectedType("page")
                      setCopyPayload("")
                    }}
                    onAction={() => {
                      runCommand(() => router.push(item.href))
                    }}
                  >
                    <IconArrowRight />
                    {item.label}
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            )}
            {tree.children.map((group) => (
              <CommandGroup
                key={group.$id}
                heading={group.name?.toString() ?? ""}
                className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
              >
                {group.type === "folder" &&
                  group.children.map((item) => {
                    if (item.type === "page") {
                      const isComponent = item.url.includes("/components/")

                      if (!showMcpDocs && item.url.includes("/mcp")) {
                        return null
                      }

                      return (
                        <CommandMenuItem
                          key={item.url}
                          textValue={
                            item.name?.toString()
                              ? `${group.name ?? ""} ${item.name}${isComponent ? " component" : ""}`
                              : ""
                          }
                          onHighlight={() =>
                            handlePageHighlight(isComponent, item)
                          }
                          onAction={() => {
                            runCommand(() => router.push(item.url))
                          }}
                        >
                          {isComponent ? (
                            <div className="border-muted-foreground aspect-square size-4 rounded-full border border-dashed" />
                          ) : (
                            <IconArrowRight />
                          )}
                          {item.name}
                        </CommandMenuItem>
                      )
                    }
                    return null
                  })}
              </CommandGroup>
            ))}
            {colors.map((colorPalette) => (
              <CommandGroup
                key={colorPalette.name}
                heading={
                  colorPalette.name.charAt(0).toUpperCase() +
                  colorPalette.name.slice(1)
                }
                className="!p-0 [&_[cmdk-group-heading]]:!p-3"
              >
                {colorPalette.colors.map((color) => (
                  <CommandMenuItem
                    key={color.hex}
                    textValue={`${color.className} color ${color.name}`}
                    onHighlight={() => handleColorHighlight(color)}
                    onAction={() => {
                      runCommand(() =>
                        copyToClipboardWithMeta(color.oklch, {
                          name: "copy_color",
                          properties: { color: color.oklch },
                        })
                      )
                    }}
                  >
                    <div
                      className="border-ghost aspect-square size-4 rounded-sm bg-(--color) after:rounded-sm"
                      style={{ "--color": color.oklch } as React.CSSProperties}
                    />
                    {color.className}
                    <span className="text-muted-foreground ml-auto font-mono text-xs font-normal tabular-nums">
                      {color.oklch}
                    </span>
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            ))}
            {blocks?.length ? (
              <CommandGroup
                heading="Blocks"
                className="!p-0 [&_[cmdk-group-heading]]:!p-3"
              >
                {blocks.map((block) => (
                  <CommandMenuItem
                    key={block.name}
                    textValue={`${block.name} block ${block.description} ${block.categories.join(" ")}`}
                    onHighlight={() => {
                      handleBlockHighlight(block)
                    }}
                    onAction={() => {
                      runCommand(() =>
                        router.push(
                          `/blocks/${block.categories[0]}#${block.name}`
                        )
                      )
                    }}
                  >
                    <SquareDashedIcon />
                    {block.description}
                    <span className="text-muted-foreground ml-auto font-mono text-xs font-normal tabular-nums">
                      {block.name}
                    </span>
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            ) : null}
          </CommandList>
          <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium dark:border-t-neutral-700 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <CommandMenuKbd>
                <CornerDownLeftIcon />
              </CommandMenuKbd>{" "}
              {selectedType === "page" || selectedType === "component"
                ? "Go to Page"
                : null}
              {selectedType === "color" ? "Copy OKLCH" : null}
            </div>
            {copyPayload && (
              <>
                <Separator orientation="vertical" className="!h-4" />
                <div className="flex items-center gap-1">
                  <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
                  <CommandMenuKbd>C</CommandMenuKbd>
                  {copyPayload}
                </div>
              </>
            )}
          </div>
        </CommandDialog>
      </Command>
    </>
  )
}

function CommandMenuItem({
  children,
  className,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem
      ref={ref}
      className={cn(
        "data-[selected=true]:border-input data-[selected=true]:bg-input/50 h-9 rounded-md border border-transparent !px-3 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </CommandItem>
  )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}
