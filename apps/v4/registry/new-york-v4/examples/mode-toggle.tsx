"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Menu, MenuItem, MenuTrigger } from "@/registry/new-york-v4/ui/menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <MenuTrigger>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Menu placement="bottom end" onAction={(key) => setTheme(key.toString())}>
        <MenuItem id="light">Light</MenuItem>
        <MenuItem id="dark">Dark</MenuItem>
        <MenuItem id="system">System</MenuItem>
      </Menu>
    </MenuTrigger>
  )
}
