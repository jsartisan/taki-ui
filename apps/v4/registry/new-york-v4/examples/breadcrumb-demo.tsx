"use client"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Menu, MenuItem, MenuTrigger } from "@/registry/new-york-v4/ui/menu"

export default function BreadcrumbDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <MenuTrigger>
          <Button
            variant="ghost"
            className="flex h-auto items-center gap-1 p-0 hover:bg-transparent"
          >
            <BreadcrumbEllipsis className="size-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Menu placement="bottom start">
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Themes</MenuItem>
            <MenuItem>GitHub</MenuItem>
          </Menu>
        </MenuTrigger>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
