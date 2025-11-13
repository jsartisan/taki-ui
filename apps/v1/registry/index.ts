import { registryItemSchema, type Registry } from "shadcn/schema"
import { z } from "zod"

import { charts } from "@/registry/registry-charts"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { internal } from "@/registry/registry-internal"
import { lib } from "@/registry/registry-lib"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"

const DEPRECATED_ITEMS = [
  "toast",
  "toast-demo",
  "toast-destructive",
  "toast-simple",
  "toast-with-action",
  "toast-with-title",
]

// Shared between index and style for backward compatibility.
const NEW_YORK_V4_STYLE = {
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
}

const BASE_REGISTRY_URL = "https://taki-ui.com/r"
const REGISTRY_COMPONENT_JSON_URL = (component: string) =>
  `${BASE_REGISTRY_URL}/${component}.json`

export const registry = {
  name: "taki-ui",
  homepage: "https://taki-ui.com",
  items: z.array(registryItemSchema).parse(
    [
      {
        name: "index",
        ...NEW_YORK_V4_STYLE,
      },
      {
        name: "style",
        ...NEW_YORK_V4_STYLE,
      },
      ...ui,
      ...charts,
      ...lib,
      ...hooks,
      ...themes,
      ...examples,
      ...internal,
    ]
      .filter((item) => {
        return !DEPRECATED_ITEMS.includes(item.name)
      })
      .map((item) => {
        const nextItem = { ...item }

        // Temporary fix for dashboard-01.
        if (nextItem.name === "dashboard-01") {
          nextItem.dependencies = [
            ...(nextItem.dependencies ?? []),
            "@tabler/icons-react",
          ]
        }

        if (nextItem.registryDependencies?.length) {
          nextItem.registryDependencies = nextItem.registryDependencies.map(
            (dependency) => {
              if (dependency.startsWith(BASE_REGISTRY_URL)) {
                return dependency
              }

              return REGISTRY_COMPONENT_JSON_URL(dependency)
            }
          )
        }

        return nextItem
      })
  ),
} satisfies Registry
