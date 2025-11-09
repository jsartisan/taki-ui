"use client"

import {
  ChevronsUpDown,
  Gift,
  Github,
  HeartIcon,
  Lock,
  Settings,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 shrink-0">
      {/* Main header */}
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur">
        <div className="flex h-14 w-full items-center gap-3 px-4">
          {/* Left Section */}
          <div className="flex h-full items-center gap-3">
            {/* Logo */}
            <HeartIcon className="size-6" />

            <span className="text-muted-foreground text-sm">/</span>

            {/* User Avatar Menu */}
            <MenuTrigger>
              <Button
                variant="ghost"
                size="sm"
                aria-label="User menu"
                className="h-10 !px-1"
              >
                <Avatar className="size-8">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback className="bg-yellow-400 text-black">
                    <span className="text-xs font-bold">👤</span>
                  </AvatarFallback>
                </Avatar>
                <ChevronsUpDown className="size-4" />
              </Button>
              <Menu
                className="w-64"
                selectionMode="single"
                defaultSelectedKeys={["personal"]}
              >
                <MenuSection>
                  <MenuItem id="personal" textValue="Personal">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarImage src="/avatars/01.png" alt="User" />
                        <AvatarFallback className="bg-yellow-400 text-black">
                          <span className="text-xs font-bold">👤</span>
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">Personal</span>
                        <span className="text-muted-foreground text-xs">
                          Free
                        </span>
                      </div>
                    </div>
                  </MenuItem>
                </MenuSection>
                <MenuSeparator />
                <MenuSection title="Other Teams" selectionMode="none">
                  <MenuItem id="team" textValue="Pawan Kumar's projects">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-md bg-gradient-to-br from-green-500 to-blue-500" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          Pawan Kumar&apos;s projects
                        </span>
                        <span className="text-muted-foreground text-xs">
                          Start Team plan
                        </span>
                      </div>
                    </div>
                  </MenuItem>
                </MenuSection>
                <MenuSeparator />
                <MenuSection selectionMode="none">
                  <MenuItem textValue="Upgrade" onAction={() => {}}>
                    <span className="font-semibold">Upgrade</span>
                  </MenuItem>
                </MenuSection>
              </Menu>
            </MenuTrigger>

            <span className="text-muted-foreground text-sm">/</span>
            {/* Project Info */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <h1 className="text-foreground text-sm font-medium">
                  Todo app creation
                </h1>
                <Lock className="text-muted-foreground size-3.5" />
              </div>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-xs hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-2">
            {/* Refer Button */}
            <Button variant="outline" size="sm">
              <Gift className="size-4" />
              Refer
            </Button>

            {/* Settings Button */}
            <Button variant="outline" size="icon-sm" aria-label="Settings">
              <Settings className="size-4" />
            </Button>

            {/* GitHub Button */}
            <Button variant="outline" size="icon-sm" aria-label="GitHub">
              <Github className="size-4" />
            </Button>

            {/* Share Button */}
            <Button variant="outline" size="sm">
              Share
            </Button>

            {/* Publish Button with notification dot */}
            <div className="relative">
              <Button variant="default" size="sm">
                Publish
              </Button>
              <span className="absolute -top-1 -right-1 flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-blue-500" />
              </span>
            </div>

            {/* User Profile Avatar */}
            <Avatar className="size-8">
              <AvatarImage src="/avatars/01.png" alt="User" />
              <AvatarFallback className="bg-yellow-400 text-black">
                <span className="text-xs font-bold">👤</span>
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
