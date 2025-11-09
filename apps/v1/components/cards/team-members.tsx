"use client"

import { ChevronDown } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import { DialogTrigger } from "@/registry/new-york/ui/dialog"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/new-york/ui/item"
import { Popover } from "@/registry/new-york/ui/popover"

const teamMembers = [
  {
    name: "Sofia Davis",
    email: "m@example.com",
    avatar: "/avatars/01.png",
    role: "Owner",
  },
  {
    name: "Jackson Lee",
    email: "p@example.com",
    avatar: "/avatars/02.png",
    role: "Developer",
  },
  {
    name: "Isabella Nguyen",
    email: "i@example.com",
    avatar: "/avatars/03.png",
    role: "Billing",
  },
]

const roles = [
  {
    name: "Viewer",
    description: "Can view and comment.",
  },
  {
    name: "Developer",
    description: "Can view, comment and edit.",
  },
  {
    name: "Billing",
    description: "Can view, comment and manage billing.",
  },
  {
    name: "Owner",
    description: "Admin-level access to all resources.",
  },
]

export function CardsTeamMembers() {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {teamMembers.map((member) => (
          <Item key={member.name} size="sm" className="gap-4 px-0">
            <Avatar className="shrink-0 self-start border">
              <AvatarImage src={member.avatar} alt="Image" />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <ItemContent>
              <ItemTitle>{member.name}</ItemTitle>
              <ItemDescription>{member.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <DialogTrigger>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto shadow-none"
                >
                  {member.role} <ChevronDown />
                </Button>
                <Popover className="p-0">
                  <Command>
                    <CommandInput placeholder="Select role..." />
                    <CommandList>
                      <CommandEmpty>No roles found.</CommandEmpty>
                      <CommandGroup>
                        {roles.map((role) => (
                          <CommandItem key={role.name}>
                            <div className="flex flex-col">
                              <p className="text-sm font-medium">{role.name}</p>
                              <p className="text-muted-foreground">
                                {role.description}
                              </p>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </Popover>
              </DialogTrigger>
            </ItemActions>
          </Item>
        ))}
      </CardContent>
    </Card>
  )
}
