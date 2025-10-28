"use client"

import { THEMES } from "@/lib/themes"
import { cn } from "@/lib/utils"
import { useThemeConfig } from "@/components/active-theme"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select
        placeholder="Select a theme"
        className="min-w-[180px]"
        selectedKey={activeTheme}
        onSelectionChange={(key) => setActiveTheme(key as string)}
      >
        {THEMES.map((theme) => (
          <SelectItem
            key={theme.name}
            id={theme.name}
            className="data-[selected=true]:opacity-50"
          >
            {theme.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
