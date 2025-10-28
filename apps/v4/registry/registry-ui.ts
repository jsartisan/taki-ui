import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-avatar"],
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
    dependencies: ["@radix-ui/react-slot"],
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
    dependencies: ["@radix-ui/react-slot"],
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
    dependencies: ["@radix-ui/react-slot"],
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
    registryDependencies: ["button", "separator"],
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
    dependencies: ["react-day-picker@latest", "date-fns"],
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
    dependencies: ["embla-carousel-react"],
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
    dependencies: ["recharts@2.15.4", "lucide-react"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    type: "registry:ui",
    dependencies: ["cmdk"],
    registryDependencies: ["dialog"],
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "context-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: [
      {
        path: "ui/context-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "date-field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "@internationalized/date"],
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
    dependencies: ["react-aria-components", "@internationalized/date"],
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
    dependencies: ["react-aria-components", "@internationalized/date"],
    registryDependencies: [
      "button",
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
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/dialog.tsx",
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
    dependencies: ["vaul", "@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/drawer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "empty",
    type: "registry:ui",
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
    registryDependencies: ["label", "separator"],
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "form",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: ["button", "label"],
    files: [
      {
        path: "ui/form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-hover-card"],
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
    dependencies: ["input-otp"],
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
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "menubar",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: [
      {
        path: "ui/menubar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "navigation-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: [
      {
        path: "ui/navigation-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "number-field",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
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
    dependencies: ["@radix-ui/react-popover"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group"],
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
    dependencies: ["react-aria-components", "@internationalized/date"],
    registryDependencies: ["button", "calendar"],
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
    dependencies: ["react-resizable-panels"],
    files: [
      {
        path: "ui/resizable.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "search-field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["field", "input"],
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
    dependencies: ["@radix-ui/react-select"],
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
    dependencies: ["@radix-ui/react-separator"],
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
    dependencies: ["@radix-ui/react-dialog"],
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
      "@radix-ui/react-slot",
      "class-variance-authority",
      "lucide-react",
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
    dependencies: ["@radix-ui/react-slider"],
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
    dependencies: ["sonner", "next-themes"],
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
    dependencies: ["class-variance-authority"],
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
    dependencies: ["@radix-ui/react-switch"],
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
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tabs"],
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
    dependencies: ["react-aria-components"],
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
    dependencies: ["react-aria-components", "@internationalized/date"],
    registryDependencies: ["date-field", "field", "input"],
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
    name: "toggle",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toggle"],
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-toggle-group"],
    registryDependencies: ["toggle"],
    files: [
      {
        path: "ui/toggle-group.tsx",
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
    registryDependencies: ["collapsible", "response", "shimmer"],
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
    registryDependencies: ["button", "badge", "collapsible", "tooltip"],
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
    registryDependencies: ["card", "collapsible", "button", "shimmer"],
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
      "dropdown-menu",
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
    registryDependencies: ["button", "collapsible", "scroll-area"],
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
    registryDependencies: ["collapsible", "response", "shimmer"],
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
    registryDependencies: ["collapsible"],
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
    registryDependencies: ["button", "scroll-area"],
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
    registryDependencies: ["collapsible"],
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
    registryDependencies: ["collapsible", "badge", "code-block"],
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
    registryDependencies: [
      "button",
      "collapsible",
      "input",
      "tooltip",
      "badge",
      "scroll-area",
    ],
    files: [
      {
        path: "ai-elements/web-preview.tsx",
        type: "registry:ui",
      },
    ],
  },
]
