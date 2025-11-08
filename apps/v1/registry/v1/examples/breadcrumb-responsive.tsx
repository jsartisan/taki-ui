"use client"

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/v1/ui/breadcrumb"
import { Button } from "@/registry/v1/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/v1/ui/drawer"
import { Menu, MenuItem, MenuTrigger } from "@/registry/v1/ui/menu"

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Building Your Application" },
  { href: "#", label: "Data Fetching" },
  { label: "Caching and Revalidating" },
]

const ITEMS_TO_DISPLAY = 3

export default function BreadcrumbResponsive() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href={items[0].href ?? "/"}>
          {items[0].label}
        </BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      {items.length > ITEMS_TO_DISPLAY ? (
        <Breadcrumb>
          {isDesktop ? (
            <MenuTrigger isOpen={open} onOpenChange={setOpen}>
              <Button
                variant="ghost"
                className="flex h-auto items-center gap-1 p-0 hover:bg-transparent"
                aria-label="Toggle menu"
              >
                <BreadcrumbEllipsis className="size-4" />
              </Button>
              <Menu placement="bottom start">
                {items.slice(1, -2).map((item, index) => (
                  <MenuItem key={index} href={item.href ? item.href : "#"}>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </MenuTrigger>
          ) : (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger aria-label="Toggle Menu">
                <BreadcrumbEllipsis className="h-4 w-4" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-left">
                  <DrawerTitle>Navigate to</DrawerTitle>
                  <DrawerDescription>
                    Select a page to navigate to.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="grid gap-1 px-4">
                  {items.slice(1, -2).map((item, index) => (
                    <a
                      key={index}
                      href={item.href ? item.href : "#"}
                      className="py-1 text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <DrawerFooter className="pt-4">
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
          <BreadcrumbSeparator />
        </Breadcrumb>
      ) : null}
      {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) =>
        item.href ? (
          <Breadcrumb key={index}>
            <BreadcrumbLink
              href={item.href}
              className="max-w-20 truncate md:max-w-none"
            >
              {item.label}
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </Breadcrumb>
        ) : (
          <Breadcrumb key={index}>
            <BreadcrumbLink className="max-w-20 truncate md:max-w-none">
              {item.label}
            </BreadcrumbLink>
          </Breadcrumb>
        )
      )}
    </Breadcrumbs>
  )
}
