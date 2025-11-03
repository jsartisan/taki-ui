"use client"

import { ChevronDownIcon } from "lucide-react"

import { Menu, MenuItem, MenuTrigger } from "@/registry/new-york-v4/ui/menu"
import {
  Sidebar,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/new-york-v4/ui/sidebar"

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <MenuTrigger>
                <SidebarMenuButton className="data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground">
                  Select Workspace
                  <ChevronDownIcon className="ml-auto" />
                </SidebarMenuButton>
                <Menu className="w-(--trigger-width)">
                  <MenuItem>
                    <span>Acme Inc</span>
                  </MenuItem>
                  <MenuItem>
                    <span>Acme Corp.</span>
                  </MenuItem>
                </Menu>
              </MenuTrigger>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <SidebarTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
