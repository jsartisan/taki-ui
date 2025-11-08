"use client"

import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"

import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york-v4/ui/menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/new-york-v4/ui/sidebar"

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <MenuTrigger>
              <SidebarMenuAction
                showOnHover
                className="data-[state=open]:bg-accent rounded-sm"
              >
                <IconDots />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
              <Menu
                className="w-24 rounded-lg"
                placement={isMobile ? "bottom end" : "right start"}
              >
                <MenuItem onAction={() => console.log("Open")}>
                  <IconFolder />
                  <span>Open</span>
                </MenuItem>
                <MenuItem onAction={() => console.log("Share")}>
                  <IconShare3 />
                  <span>Share</span>
                </MenuItem>
                <MenuSeparator />
                <MenuItem
                  className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
                  onAction={() => console.log("Delete")}
                >
                  <IconTrash />
                  <span>Delete</span>
                </MenuItem>
              </Menu>
            </MenuTrigger>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
