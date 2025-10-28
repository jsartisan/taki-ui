"use client"

import { cn } from "@/lib/utils"
import { useThemeConfig } from "@/components/active-theme"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"

const THEMES = {
  sizes: [
    {
      name: "Default",
      value: "default",
    },
    {
      name: "Scaled",
      value: "scaled",
    },
    {
      name: "Mono",
      value: "mono",
    },
  ],
  colors: [
    {
      name: "Blue",
      value: "blue",
    },
    {
      name: "Green",
      value: "green",
    },
    {
      name: "Amber",
      value: "amber",
    },
    {
      name: "Rose",
      value: "rose",
    },
    {
      name: "Purple",
      value: "purple",
    },
    {
      name: "Orange",
      value: "orange",
    },
    {
      name: "Teal",
      value: "teal",
    },
  ],
  fonts: [
    {
      name: "Inter",
      value: "inter",
    },
    {
      name: "Noto Sans",
      value: "noto-sans",
    },
    {
      name: "Nunito Sans",
      value: "nunito-sans",
    },
    {
      name: "Figtree",
      value: "figtree",
    },
  ],
  radius: [
    {
      name: "None",
      value: "rounded-none",
    },
    {
      name: "Small",
      value: "rounded-small",
    },
    {
      name: "Medium",
      value: "rounded-medium",
    },
    {
      name: "Large",
      value: "rounded-large",
    },
    {
      name: "Full",
      value: "rounded-full",
    },
  ],
}

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Select
        selectedKey={activeTheme}
        onSelectionChange={(key) => setActiveTheme(key as string)}
        placeholder="Select"
        size="sm"
        className="min-w-[180px]"
      >
        {Object.entries(THEMES).flatMap(([key, themes]) =>
          themes.map((theme) => (
            <SelectItem key={theme.value} id={theme.value}>
              {theme.name}
            </SelectItem>
          ))
        )}
      </Select>
    </div>
  )
}
