"use client"

import { SubmenuTrigger } from "react-aria-components"

import { Button } from "@/registry/v1/ui/button"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/v1/ui/menu"

export default function MenuDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <Menu placement="bottom start" className="w-56">
        <MenuSection title="My Account">
          <MenuItem onAction={() => console.log("Profile")}>
            Profile
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⇧⌘P
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("Billing")}>
            Billing
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘B
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("Settings")}>
            Settings
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘S
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("Keyboard shortcuts")}>
            Keyboard shortcuts
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘K
            </span>
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuItem onAction={() => console.log("Team")}>Team</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Invite users</MenuItem>
            <Menu className="w-56">
              <MenuItem onAction={() => console.log("Email")}>Email</MenuItem>
              <MenuItem onAction={() => console.log("Message")}>
                Message
              </MenuItem>
              <MenuSeparator />
              <MenuItem onAction={() => console.log("More")}>More...</MenuItem>
            </Menu>
          </SubmenuTrigger>
          <MenuItem onAction={() => console.log("New Team")}>
            New Team
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘+T
            </span>
          </MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuItem onAction={() => console.log("GitHub")}>GitHub</MenuItem>
        <MenuItem onAction={() => console.log("Support")}>Support</MenuItem>
        <MenuItem isDisabled>API</MenuItem>
        <MenuSeparator />
        <MenuItem onAction={() => console.log("Log out")}>
          Log out
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⇧⌘Q
          </span>
        </MenuItem>
      </Menu>
    </MenuTrigger>
  )
}
