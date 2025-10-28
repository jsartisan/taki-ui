"use client"

import { useThemeConfig } from "@/components/active-theme"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
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
]

const SCALED_THEMES = [
  {
    name: "Default",
    value: "default-scaled",
  },
  {
    name: "Blue",
    value: "blue-scaled",
  },
]

const MONO_THEMES = [
  {
    name: "Mono",
    value: "mono-scaled",
  },
]

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <div className="flex items-center gap-2">
      <Select
        selectedKey={activeTheme}
        onSelectionChange={(key) => setActiveTheme(key as string)}
        placeholder="Select a theme"
        size="sm"
        className="min-w-[180px]"
      >
        {[...DEFAULT_THEMES, ...SCALED_THEMES, ...MONO_THEMES].map((theme) => (
          <SelectItem key={theme.value} id={theme.value}>
            {theme.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
