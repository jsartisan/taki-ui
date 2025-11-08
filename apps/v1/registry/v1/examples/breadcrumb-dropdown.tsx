"use client"

import { ChevronDownIcon, SlashIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/v1/ui/breadcrumb"
import { Button } from "@/registry/v1/ui/button"
import { Menu, MenuItem, MenuTrigger } from "@/registry/v1/ui/menu"

export default function BreadcrumbWithDropdown() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
      </Breadcrumb>
      <Breadcrumb>
        <MenuTrigger>
          <Button
            variant="ghost"
            className="flex h-auto items-center gap-1 p-0 hover:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"
          >
            Components
            <ChevronDownIcon />
          </Button>
          <Menu placement="bottom start">
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Themes</MenuItem>
            <MenuItem>GitHub</MenuItem>
          </Menu>
        </MenuTrigger>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
