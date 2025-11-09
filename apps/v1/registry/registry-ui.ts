import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "alert",
    type: "registry:ui",
    dependencies: ["tailwind-variants"],
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumb",
    type: "registry:ui",
    dependencies: ["lucide-react", "react-aria-components"],
    files: [
      {
        path: "ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button-group",
    type: "registry:ui",
    dependencies: ["tailwind-variants"],
    registryDependencies: ["label", "separator"],
    files: [
      {
        path: "ui/button-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "calendar",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "carousel",
    type: "registry:ui",
    files: [
      {
        path: "ui/carousel.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["button"],
    dependencies: ["embla-carousel-react", "lucide-react"],
  },
  {
    name: "chart",
    type: "registry:ui",
    files: [
      {
        path: "ui/chart.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["card"],
    dependencies: ["recharts"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["field"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "combobox",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["field", "list-box", "popover"],
    files: [
      {
        path: "ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    type: "registry:ui",
    dependencies: ["lucide-react", "react-aria-components"],
    registryDependencies: ["dialog", "list-box", "modal"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "date-field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["field", "input"],
    files: [
      {
        path: "ui/date-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "date-picker",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: [
      "button",
      "calendar",
      "date-field",
      "dialog",
      "field",
      "input-group",
      "popover",
    ],
    files: [
      {
        path: "ui/date-picker.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "date-range-picker",
    type: "registry:ui",
    dependencies: ["lucide-react", "react-aria-components"],
    registryDependencies: [
      "date-field",
      "dialog",
      "field",
      "input-group",
      "popover",
      "range-calendar",
    ],
    files: [
      {
        path: "ui/date-range-picker.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "modal",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/modal.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "disclosure",
    type: "registry:ui",
    dependencies: [
      "react-aria-components",
      "lucide-react",
      "tailwind-variants",
    ],
    files: [
      {
        path: "ui/disclosure.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "drawer",
    type: "registry:ui",
    dependencies: ["vaul"],
    files: [
      {
        path: "ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "empty",
    type: "registry:ui",
    dependencies: ["tailwind-variants"],
    files: [
      {
        path: "ui/empty.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["description", "label", "separator"],
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "file-trigger",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/file-trigger.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "grid-list",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/grid-list.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/hover-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input-group",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["button", "input", "textarea"],
    files: [
      {
        path: "ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input-otp",
    type: "registry:ui",
    dependencies: ["input-otp", "lucide-react"],
    files: [
      {
        path: "ui/input-otp.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "item",
    type: "registry:ui",
    dependencies: ["tailwind-variants"],
    registryDependencies: ["separator"],
    files: [
      {
        path: "ui/item.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "list-box",
    type: "registry:ui",
    dependencies: [
      "react-aria-components",
      "tailwind-variants",
      "lucide-react",
    ],
    files: [
      {
        path: "ui/list-box.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "number-field",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["field", "input", "input-group"],
    files: [
      {
        path: "ui/number-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pagination",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "progress-bar",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: [
      {
        path: "ui/progress-bar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["field"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "range-calendar",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["calendar"],
    files: [
      {
        path: "ui/range-calendar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "resizable",
    type: "registry:ui",
    dependencies: ["lucide-react", "react-resizable-panels"],
    files: [
      {
        path: "ui/resizable.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "search-field",
    type: "registry:ui",
    dependencies: [
      "lodash",
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["field", "input", "input-group"],
    files: [
      {
        path: "ui/search-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["lucide-react", "react-aria-components"],
    registryDependencies: ["button", "field", "list-box", "popover"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sheet",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sidebar",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: [
      "button",
      "separator",
      "sheet",
      "tooltip",
      "input",
      "use-mobile",
      "skeleton",
    ],
    files: [
      {
        path: "ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              sidebar: {
                DEFAULT: "hsl(var(--sidebar-background))",
                foreground: "hsl(var(--sidebar-foreground))",
                primary: "hsl(var(--sidebar-primary))",
                "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                accent: "hsl(var(--sidebar-accent))",
                "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                border: "hsl(var(--sidebar-border))",
                ring: "hsl(var(--sidebar-ring))",
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        "sidebar-background": "0 0% 98%",
        "sidebar-foreground": "240 5.3% 26.1%",
        "sidebar-primary": "240 5.9% 10%",
        "sidebar-primary-foreground": "0 0% 98%",
        "sidebar-accent": "240 4.8% 95.9%",
        "sidebar-accent-foreground": "240 5.9% 10%",
        "sidebar-border": "220 13% 91%",
        "sidebar-ring": "217.2 91.2% 59.8%",
      },
      dark: {
        "sidebar-background": "240 5.9% 10%",
        "sidebar-foreground": "240 4.8% 95.9%",
        "sidebar-primary": "224.3 76.3% 48%",
        "sidebar-primary-foreground": "0 0% 100%",
        "sidebar-accent": "240 3.7% 15.9%",
        "sidebar-accent-foreground": "240 4.8% 95.9%",
        "sidebar-border": "240 3.7% 15.9%",
        "sidebar-ring": "217.2 91.2% 59.8%",
      },
    },
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sonner",
    type: "registry:ui",
    dependencies: ["lucide-react", "next-themes", "sonner"],
    files: [
      {
        path: "ui/sonner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spinner",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tag-group",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["field"],
    files: [
      {
        path: "ui/tag-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "textarea",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "text-field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["field", "input"],
    files: [
      {
        path: "ui/text-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "time-field",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["date-field", "field"],
    files: [
      {
        path: "ui/time-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toast",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toast"],
    files: [
      {
        path: "ui/toast.tsx",
        type: "registry:ui",
      },
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
      {
        path: "ui/toaster.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toggle-button",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/toggle-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toggle-button-group",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "ui/toggle-button-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["react-aria-components", "tailwind-variants"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tree",
    type: "registry:ui",
    dependencies: [
      "lucide-react",
      "react-aria-components",
      "tailwind-variants",
    ],
    registryDependencies: ["button", "checkbox"],
    files: [
      {
        path: "ui/tree.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "kbd",
    type: "registry:ui",
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
  },
  // AI Elements
  {
    name: "actions",
    type: "registry:ui",
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "ai-elements/actions.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "artifact",
    type: "registry:ui",
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "ai-elements/artifact.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "branch",
    type: "registry:ui",
    registryDependencies: ["button"],
    dependencies: ["ai"],
    files: [
      {
        path: "ai-elements/branch.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "canvas",
    type: "registry:ui",
    files: [
      {
        path: "ai-elements/canvas.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "chain-of-thought",
    type: "registry:ui",
    registryDependencies: ["disclosure", "response", "shimmer"],
    files: [
      {
        path: "ai-elements/chain-of-thought.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "code-block",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ai-elements/code-block.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "connection",
    type: "registry:ui",
    files: [
      {
        path: "ai-elements/connection.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "context",
    type: "registry:ui",
    registryDependencies: ["button", "badge", "disclosure", "tooltip"],
    dependencies: ["ai"],
    files: [
      {
        path: "ai-elements/context.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "controls",
    type: "registry:ui",
    dependencies: ["@xyflow/react"],
    files: [
      {
        path: "ai-elements/controls.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "conversation",
    type: "registry:ui",
    registryDependencies: ["button"],
    dependencies: ["use-stick-to-bottom"],
    files: [
      {
        path: "ai-elements/conversation.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "edge",
    type: "registry:ui",
    dependencies: ["@xyflow/react"],
    files: [
      {
        path: "ai-elements/edge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "image",
    type: "registry:ui",
    dependencies: ["ai"],
    files: [
      {
        path: "ai-elements/image.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "inline-citation",
    type: "registry:ui",
    registryDependencies: ["hover-card", "badge"],
    dependencies: ["ai"],
    files: [
      {
        path: "ai-elements/inline-citation.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "loader",
    type: "registry:ui",
    files: [
      {
        path: "ai-elements/loader.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "message",
    type: "registry:ui",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "ai-elements/message.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "node",
    type: "registry:ui",
    dependencies: ["@xyflow/react"],
    files: [
      {
        path: "ai-elements/node.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "open-in-chat",
    type: "registry:ui",
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "ai-elements/open-in-chat.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "panel",
    type: "registry:ui",
    dependencies: ["@xyflow/react"],
    files: [
      {
        path: "ai-elements/panel.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "plan",
    type: "registry:ui",
    registryDependencies: ["card", "disclosure", "button", "shimmer"],
    files: [
      {
        path: "ai-elements/plan.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "prompt-input",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "command",
      "menu",
      "hover-card",
      "input-group",
      "select",
      "tooltip",
    ],
    dependencies: ["ai", "nanoid"],
    files: [
      {
        path: "ai-elements/prompt-input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "queue",
    type: "registry:ui",
    registryDependencies: ["button", "disclosure"],
    files: [
      {
        path: "ai-elements/queue.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "reasoning",
    type: "registry:ui",
    registryDependencies: ["disclosure", "response", "shimmer"],
    files: [
      {
        path: "ai-elements/reasoning.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "response",
    type: "registry:ui",
    dependencies: ["streamdown"],
    files: [
      {
        path: "ai-elements/response.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "shimmer",
    type: "registry:ui",
    dependencies: ["motion"],
    files: [
      {
        path: "ai-elements/shimmer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "sources",
    type: "registry:ui",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "ai-elements/sources.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "suggestion",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ai-elements/suggestion.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "task",
    type: "registry:ui",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "ai-elements/task.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toolbar",
    type: "registry:ui",
    dependencies: ["@xyflow/react"],
    files: [
      {
        path: "ai-elements/toolbar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tool",
    type: "registry:ui",
    registryDependencies: ["disclosure", "badge", "code-block"],
    dependencies: ["ai"],
    files: [
      {
        path: "ai-elements/tool.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "web-preview",
    type: "registry:ui",
    registryDependencies: ["button", "disclosure", "input", "tooltip", "badge"],
    files: [
      {
        path: "ai-elements/web-preview.tsx",
        type: "registry:ui",
      },
    ],
  },
]
