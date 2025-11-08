"use client"

import { SubmenuTrigger } from "react-aria-components"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"

import { Popover } from "../ui/popover"

const TEAM_MEMBERS = [
  {
    name: "shadcn",
    email: "shadcn@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "maxleiter",
    email: "max@example.com",
    avatar: "https://github.com/maxleiter.png",
  },
  {
    name: "evilrabbit",
    email: "rabbit@example.com",
    avatar: "https://github.com/evilrabbit.png",
  },
]

const PROJECTS = [
  { name: "Design System", emoji: "🎨" },
  { name: "Marketing Site", emoji: "📱" },
  { name: "Dashboard", emoji: "📊" },
  { name: "Documentation", emoji: "📚" },
  { name: "API Gateway", emoji: "🔌" },
]

export default function MenuCommandDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline">Assign Task</Button>
      <Menu className="w-56">
        <MenuItem onAction={() => console.log("Assign to me")}>
          Assign to me
        </MenuItem>
        <MenuSeparator />
        <SubmenuTrigger>
          <MenuItem>Assign to team member</MenuItem>
          <Popover>
            <Command>
              <CommandInput placeholder="Search team members..." autoFocus />
              <CommandList
                renderEmptyState={() => (
                  <CommandEmpty>No team member found</CommandEmpty>
                )}
              >
                <CommandGroup>
                  {TEAM_MEMBERS.map((member) => (
                    <CommandItem
                      key={member.email}
                      id={member.email}
                      onSelect={() => {
                        console.log("Assigned to:", member.name)
                      }}
                    >
                      <span className="mr-2 inline-flex h-6 w-6 overflow-hidden rounded-full align-middle">
                        <img src={member.avatar} alt={member.name} />
                      </span>
                      <span className="ml-2">{member.name}</span>
                      <span className="text-muted-foreground ml-auto text-xs">
                        {member.email}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </Popover>
        </SubmenuTrigger>
        <SubmenuTrigger>
          <MenuItem>Move to project</MenuItem>
          <Popover>
            <Command>
              <CommandInput placeholder="Search projects..." autoFocus />
              <CommandList
                renderEmptyState={() => (
                  <CommandEmpty>No project found</CommandEmpty>
                )}
              >
                <CommandGroup>
                  {PROJECTS.map((project) => (
                    <CommandItem
                      key={project.name}
                      id={project.name}
                      onSelect={() => {
                        console.log("Moved to:", project.name)
                      }}
                    >
                      <span className="mr-2">{project.emoji}</span>
                      {project.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </Popover>
        </SubmenuTrigger>
        <MenuSeparator />
        <MenuItem onAction={() => console.log("Unassign")}>Unassign</MenuItem>
      </Menu>
    </MenuTrigger>
  )
}
