"use client"

import { ChevronUpIcon } from "lucide-react"

import { Menu, MenuItem, MenuTrigger } from "@/registry/v1/ui/menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/v1/ui/sidebar"

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <MenuTrigger>
                <SidebarMenuButton className="data-[pressed]:bg-sidebar-accent data-[pressed]:text-sidebar-accent-foreground">
                  Username
                  <ChevronUpIcon className="ml-auto" />
                </SidebarMenuButton>
                <Menu placement="top" className="w-(--trigger-width)">
                  <MenuItem>
                    <span>Account</span>
                  </MenuItem>
                  <MenuItem>
                    <span>Billing</span>
                  </MenuItem>
                  <MenuItem>
                    <span>Sign out</span>
                  </MenuItem>
                </Menu>
              </MenuTrigger>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <SidebarTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
