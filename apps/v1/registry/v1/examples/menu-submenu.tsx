"use client"

import { SubmenuTrigger } from "react-aria-components"

import { Button } from "@/registry/v1/ui/button"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/v1/ui/menu"

export default function MenuSubmenuDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline">Edit</Button>
      <Menu className="w-56">
        <MenuItem onAction={() => console.log("Undo")}>
          Undo
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⌘Z
          </span>
        </MenuItem>
        <MenuItem onAction={() => console.log("Redo")}>
          Redo
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⇧⌘Z
          </span>
        </MenuItem>
        <MenuSeparator />
        <MenuItem onAction={() => console.log("Cut")}>
          Cut
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⌘X
          </span>
        </MenuItem>
        <MenuItem onAction={() => console.log("Copy")}>
          Copy
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⌘C
          </span>
        </MenuItem>
        <MenuItem onAction={() => console.log("Paste")}>
          Paste
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⌘V
          </span>
        </MenuItem>
        <MenuSeparator />
        <SubmenuTrigger>
          <MenuItem>Share</MenuItem>
          <Menu className="w-56">
            <MenuItem onAction={() => console.log("Email")}>Email</MenuItem>
            <MenuItem onAction={() => console.log("Copy Link")}>
              Copy Link
            </MenuItem>
            <MenuSeparator />
            <SubmenuTrigger>
              <MenuItem>Social Media</MenuItem>
              <Menu className="w-56">
                <MenuItem onAction={() => console.log("Twitter")}>
                  Twitter
                </MenuItem>
                <MenuItem onAction={() => console.log("Facebook")}>
                  Facebook
                </MenuItem>
                <MenuItem onAction={() => console.log("LinkedIn")}>
                  LinkedIn
                </MenuItem>
              </Menu>
            </SubmenuTrigger>
          </Menu>
        </SubmenuTrigger>
        <SubmenuTrigger>
          <MenuItem>Export</MenuItem>
          <Menu className="w-56">
            <MenuItem onAction={() => console.log("PDF")}>PDF</MenuItem>
            <MenuItem onAction={() => console.log("PNG")}>PNG</MenuItem>
            <MenuItem onAction={() => console.log("SVG")}>SVG</MenuItem>
            <MenuSeparator />
            <MenuItem onAction={() => console.log("HTML")}>HTML</MenuItem>
            <MenuItem onAction={() => console.log("Markdown")}>
              Markdown
            </MenuItem>
          </Menu>
        </SubmenuTrigger>
      </Menu>
    </MenuTrigger>
  )
}
