"use client"

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

import { Button } from "@/registry/v1/ui/button"
import { ButtonGroup } from "@/registry/v1/ui/button-group"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/v1/ui/menu"

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <MenuTrigger>
        <Button variant="outline" className="!pl-2">
          <ChevronDownIcon />
        </Button>
        <Menu placement="bottom end" className="[--radius:1rem]">
          <MenuItem>
            <VolumeOffIcon />
            Mute Conversation
          </MenuItem>
          <MenuItem>
            <CheckIcon />
            Mark as Read
          </MenuItem>
          <MenuItem>
            <AlertTriangleIcon />
            Report Conversation
          </MenuItem>
          <MenuItem>
            <UserRoundXIcon />
            Block User
          </MenuItem>
          <MenuItem>
            <ShareIcon />
            Share Conversation
          </MenuItem>
          <MenuItem>
            <CopyIcon />
            Copy Conversation
          </MenuItem>
          <MenuSeparator />
          <MenuItem className="text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive">
            <TrashIcon />
            Delete Conversation
          </MenuItem>
        </Menu>
      </MenuTrigger>
    </ButtonGroup>
  )
}
