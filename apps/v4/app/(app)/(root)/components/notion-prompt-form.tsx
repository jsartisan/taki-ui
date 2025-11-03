"use client"

import { useMemo, useState } from "react"
import {
  IconApps,
  IconArrowUp,
  IconAt,
  IconBook,
  IconCircleDashedPlus,
  IconPaperclip,
  IconPlus,
  IconWorld,
  IconX,
} from "@tabler/icons-react"
import { SubmenuTrigger } from "react-aria-components"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import { DialogTrigger } from "@/registry/new-york-v4/ui/dialog"
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"
import { Popover } from "@/registry/new-york-v4/ui/popover"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Tooltip, TooltipTrigger } from "@/registry/new-york-v4/ui/tooltip"

const SAMPLE_DATA = {
  mentionable: [
    {
      type: "page",
      title: "Meeting Notes",
      image: "📝",
    },
    {
      type: "page",
      title: "Project Dashboard",
      image: "📊",
    },
    {
      type: "page",
      title: "Ideas & Brainstorming",
      image: "💡",
    },
    {
      type: "page",
      title: "Calendar & Events",
      image: "📅",
    },
    {
      type: "page",
      title: "Documentation",
      image: "📚",
    },
    {
      type: "page",
      title: "Goals & Objectives",
      image: "🎯",
    },
    {
      type: "page",
      title: "Budget Planning",
      image: "💰",
    },
    {
      type: "page",
      title: "Team Directory",
      image: "👥",
    },
    {
      type: "page",
      title: "Technical Specs",
      image: "🔧",
    },
    {
      type: "page",
      title: "Analytics Report",
      image: "📈",
    },
    {
      type: "user",
      title: "shadcn",
      image: "https://github.com/shadcn.png",
      workspace: "Workspace",
    },
    {
      type: "user",
      title: "maxleiter",
      image: "https://github.com/maxleiter.png",
      workspace: "Workspace",
    },
    {
      type: "user",
      title: "evilrabbit",
      image: "https://github.com/evilrabbit.png",
      workspace: "Workspace",
    },
  ],
  models: [
    {
      name: "Auto",
    },
    {
      name: "Agent Mode",
      badge: "Beta",
    },
    {
      name: "Plan Mode",
    },
  ],
}

function MentionableIcon({
  item,
}: {
  item: (typeof SAMPLE_DATA.mentionable)[0]
}) {
  return item.type === "page" ? (
    <span className="flex size-4 items-center justify-center">
      {item.image}
    </span>
  ) : (
    <Avatar className="size-4">
      <AvatarImage src={item.image} />
      <AvatarFallback>{item.title[0]}</AvatarFallback>
    </Avatar>
  )
}

export function NotionPromptForm() {
  const [mentions, setMentions] = useState<string[]>([])
  const [mentionPopoverOpen, setMentionPopoverOpen] = useState(false)
  const [modelPopoverOpen, setModelPopoverOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState<
    (typeof SAMPLE_DATA.models)[0]
  >(SAMPLE_DATA.models[0])
  const [scopeMenuOpen, setScopeMenuOpen] = useState(false)

  const grouped = useMemo(() => {
    return SAMPLE_DATA.mentionable.reduce(
      (acc, item) => {
        const isAvailable = !mentions.includes(item.title)

        if (isAvailable) {
          if (!acc[item.type]) {
            acc[item.type] = []
          }
          acc[item.type].push(item)
        }
        return acc
      },
      {} as Record<string, typeof SAMPLE_DATA.mentionable>
    )
  }, [mentions])

  const hasMentions = mentions.length > 0

  return (
    <form className="[--radius:1.2rem]">
      <Field>
        <FieldLabel htmlFor="notion-prompt" className="sr-only">
          Prompt
        </FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="notion-prompt"
            placeholder="Ask, search, or make anything..."
          />
          <InputGroupAddon align="block-start">
            <DialogTrigger
              isOpen={mentionPopoverOpen}
              onOpenChange={setMentionPopoverOpen}
            >
              <TooltipTrigger>
                <InputGroupButton
                  variant="outline"
                  size={!hasMentions ? "sm" : "icon-sm"}
                  className="rounded-full transition-transform"
                >
                  <IconAt /> {!hasMentions && "Add context"}
                </InputGroupButton>
                <Tooltip>Mention a person, page, or date</Tooltip>
              </TooltipTrigger>
              <Popover className="p-0 [--radius:1.2rem]">
                <Command>
                  <CommandInput placeholder="Search pages..." autoFocus />

                  <CommandList
                    renderEmptyState={() => (
                      <CommandEmpty>No pages found</CommandEmpty>
                    )}
                  >
                    {Object.entries(grouped).map(([type, items]) => (
                      <CommandGroup
                        key={type}
                        heading={type === "page" ? "Pages" : "Users"}
                      >
                        {items.map((item) => (
                          <CommandItem
                            key={item.title}
                            id={item.title}
                            onAction={() => {
                              setMentions((prev) => [...prev, item.title])
                              setMentionPopoverOpen(false)
                            }}
                          >
                            <MentionableIcon item={item} />
                            {item.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </Popover>
            </DialogTrigger>
            <div className="no-scrollbar -m-1.5 flex gap-1 overflow-y-auto p-1.5">
              {mentions.map((mention) => {
                const item = SAMPLE_DATA.mentionable.find(
                  (item) => item.title === mention
                )

                if (!item) {
                  return null
                }

                return (
                  <InputGroupButton
                    key={mention}
                    size="sm"
                    variant="secondary"
                    className="rounded-full !pl-2"
                    onPress={() => {
                      setMentions((prev) => prev.filter((m) => m !== mention))
                    }}
                  >
                    <MentionableIcon item={item} />
                    {item.title}
                    <IconX />
                  </InputGroupButton>
                )
              })}
            </div>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" className="gap-1">
            <TooltipTrigger>
              <InputGroupButton
                size="icon-sm"
                className="rounded-full"
                aria-label="Attach file"
              >
                <IconPaperclip />
              </InputGroupButton>
              <Tooltip>Attach file</Tooltip>
            </TooltipTrigger>
            <MenuTrigger
              isOpen={modelPopoverOpen}
              onOpenChange={setModelPopoverOpen}
            >
              <TooltipTrigger>
                <InputGroupButton size="sm" className="rounded-full">
                  {selectedModel.name}
                </InputGroupButton>
                <Tooltip>Select AI model</Tooltip>
              </TooltipTrigger>
              <Menu
                placement="top start"
                className="[--radius:1rem]"
                selectionMode="single"
                selectedKeys={[selectedModel.name]}
                onSelectionChange={(keys) => {
                  const key = Array.from(keys)[0]
                  const model = SAMPLE_DATA.models.find((m) => m.name === key)
                  if (model) {
                    setSelectedModel(model)
                  }
                }}
              >
                <MenuSection title="Select Agent Mode">
                  {SAMPLE_DATA.models.map((model) => (
                    <MenuItem key={model.name} id={model.name} className="pl-2">
                      {model.name}
                      {model.badge && (
                        <Badge
                          variant="secondary"
                          className="h-5 rounded-sm bg-blue-100 px-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
                          {model.badge}
                        </Badge>
                      )}
                    </MenuItem>
                  ))}
                </MenuSection>
              </Menu>
            </MenuTrigger>
            <MenuTrigger isOpen={scopeMenuOpen} onOpenChange={setScopeMenuOpen}>
              <InputGroupButton size="sm" className="rounded-full">
                <IconWorld /> All Sources
              </InputGroupButton>
              <Menu placement="top end" className="[--radius:1rem]">
                <MenuItem className="cursor-default">
                  <label
                    htmlFor="web-search"
                    className="flex w-full items-center"
                  >
                    <IconWorld /> Web Search{" "}
                    <Switch id="web-search" className="ml-auto" defaultSelected>
                      <span className="sr-only">Toggle web search</span>
                    </Switch>
                  </label>
                </MenuItem>
                <MenuSeparator />
                <MenuItem className="cursor-default">
                  <label htmlFor="apps" className="flex w-full items-center">
                    <IconApps /> Apps and Integrations
                    <Switch id="apps" className="ml-auto" defaultSelected>
                      <span className="sr-only">Toggle apps integration</span>
                    </Switch>
                  </label>
                </MenuItem>
                <MenuItem>
                  <IconCircleDashedPlus /> All Sources I can access
                </MenuItem>
                <SubmenuTrigger>
                  <MenuItem>
                    <Avatar className="size-4">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    shadcn
                  </MenuItem>
                  <Menu className="w-72 p-0 [--radius:1rem]">
                    <Command>
                      <CommandInput
                        placeholder="Find or use knowledge in..."
                        autoFocus
                      />
                      <CommandList>
                        <CommandEmpty>No knowledge found</CommandEmpty>
                        <CommandGroup>
                          {SAMPLE_DATA.mentionable
                            .filter((item) => item.type === "user")
                            .map((user) => (
                              <CommandItem
                                key={user.title}
                                value={user.title}
                                onSelect={() => {
                                  console.log("Selected user:", user.title)
                                }}
                              >
                                <Avatar className="size-4">
                                  <AvatarImage src={user.image} />
                                  <AvatarFallback>
                                    {user.title[0]}
                                  </AvatarFallback>
                                </Avatar>
                                {user.title}{" "}
                                <span className="text-muted-foreground">
                                  - {user.workspace}
                                </span>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </Menu>
                </SubmenuTrigger>
                <MenuItem>
                  <IconBook /> Help Center
                </MenuItem>
                <MenuSeparator />
                <MenuItem>
                  <IconPlus /> Connect Apps
                </MenuItem>
                <MenuItem
                  textValue="Info"
                  className="text-muted-foreground cursor-default text-xs font-medium hover:bg-transparent focus:bg-transparent"
                >
                  We&apos;ll only search in the sources selected here.
                </MenuItem>
              </Menu>
            </MenuTrigger>
            <InputGroupButton
              aria-label="Send"
              className="ml-auto rounded-full"
              variant="default"
              size="icon-sm"
            >
              <IconArrowUp />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </form>
  )
}
