"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"
import { SubmenuTrigger } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { ButtonGroup } from "@/registry/new-york/ui/button-group"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon-sm" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Archive
        </Button>
        <Button variant="outline" size="sm">
          Report
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Snooze
        </Button>
        <MenuTrigger>
          <Button variant="outline" size="icon-sm" aria-label="More Options">
            <MoreHorizontalIcon />
          </Button>
          <Menu placement="bottom end" className="w-48" selectionMode="single">
            <MenuItem>
              <MailCheckIcon />
              Mark as Read
            </MenuItem>
            <MenuItem>
              <ArchiveIcon />
              Archive
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <ClockIcon />
              Snooze
            </MenuItem>
            <MenuItem>
              <CalendarPlusIcon />
              Add to Calendar
            </MenuItem>
            <MenuItem>
              <ListFilterPlusIcon />
              Add to List
            </MenuItem>
            <SubmenuTrigger>
              <MenuItem>
                <TagIcon />
                Label As...
              </MenuItem>
              <Menu selectionMode="single" defaultSelectedKeys={["personal"]}>
                <MenuItem id="personal">Personal</MenuItem>
                <MenuItem id="work">Work</MenuItem>
                <MenuItem id="other">Other</MenuItem>
              </Menu>
            </SubmenuTrigger>
            <MenuSeparator />
            <MenuItem className="text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive">
              <Trash2Icon />
              Trash
            </MenuItem>
          </Menu>
        </MenuTrigger>
      </ButtonGroup>
    </ButtonGroup>
  )
}
