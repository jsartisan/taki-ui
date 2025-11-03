import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "alert-demo",
    type: "registry:example",
    registryDependencies: ["alert"],
    files: [
      {
        path: "examples/alert-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-destructive",
    type: "registry:example",
    registryDependencies: ["alert"],
    files: [
      {
        path: "examples/alert-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "actions-demo",
    type: "registry:example",
    registryDependencies: ["actions", "button", "tooltip"],
    files: [
      {
        path: "examples/actions-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "artifact-demo",
    type: "registry:example",
    registryDependencies: ["artifact", "button", "tooltip"],
    files: [
      {
        path: "examples/artifact-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "branch-demo",
    type: "registry:example",
    registryDependencies: ["branch", "message", "avatar", "button"],
    dependencies: ["ai"],
    files: [
      {
        path: "examples/branch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chain-of-thought-demo",
    type: "registry:example",
    registryDependencies: ["chain-of-thought", "disclosure", "badge"],
    files: [
      {
        path: "examples/chain-of-thought-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-destructive",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-link",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-outline",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-secondary",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-demo",
    type: "registry:example",
    registryDependencies: ["breadcrumb", "menu", "button"],
    files: [
      {
        path: "examples/breadcrumb-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-separator",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-dropdown",
    type: "registry:example",
    registryDependencies: ["breadcrumb", "menu", "button"],
    files: [
      {
        path: "examples/breadcrumb-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-ellipsis",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-ellipsis.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-link",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "examples/breadcrumb-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-responsive",
    type: "registry:example",
    registryDependencies: ["breadcrumb", "menu", "button", "drawer"],
    files: [
      {
        path: "examples/breadcrumb-responsive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-default",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-default.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-with-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-as-child",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-as-child.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-rounded",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-rounded.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-size",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-demo",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-nested",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-nested.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-size",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-separator",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-split",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-split.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-input.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-dropdown",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-select",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-select.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-popover",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-popover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input-group",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-orientation",
    type: "registry:example",
    registryDependencies: ["button-group"],
    files: [
      {
        path: "examples/button-group-orientation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-demo",
    type: "registry:example",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "examples/calendar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-form",
    type: "registry:example",
    registryDependencies: ["calendar", "form", "popover"],
    files: [
      {
        path: "examples/calendar-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["card", "button", "switch"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-with-form",
    type: "registry:example",
    registryDependencies: ["button", "card", "input", "label", "select"],
    files: [
      {
        path: "examples/card-with-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-demo",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-size",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-spacing",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-spacing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-orientation",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-orientation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-api",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-api.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-plugin",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "examples/carousel-plugin.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-demo",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "examples/checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-disabled",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "examples/checkbox-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-form-multiple",
    type: "registry:example",
    registryDependencies: ["checkbox", "form"],
    files: [
      {
        path: "examples/checkbox-form-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-form-single",
    type: "registry:example",
    registryDependencies: ["checkbox", "form"],
    files: [
      {
        path: "examples/checkbox-form-single.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-group-demo",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "examples/checkbox-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-with-text",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "examples/checkbox-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-demo",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-custom-theme",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-custom-theme.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-diff",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-diff.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-focus",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-focus.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-highlight",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-highlight.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-highlight-word",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-highlight-word.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-multiple-files",
    type: "registry:example",
    registryDependencies: ["code-block", "button", "select"],
    files: [
      {
        path: "examples/code-block-multiple-files.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-no-header",
    type: "registry:example",
    registryDependencies: ["code-block"],
    files: [
      {
        path: "examples/code-block-no-header.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-no-line-numbers",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-no-line-numbers.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "code-block-no-syntax",
    type: "registry:example",
    registryDependencies: ["code-block", "button"],
    files: [
      {
        path: "examples/code-block-no-syntax.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "context-demo",
    type: "registry:example",
    registryDependencies: ["context", "button", "hover-card", "progress"],
    dependencies: ["ai", "tokenlens"],
    files: [
      {
        path: "examples/context-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-demo",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-sections",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-sections.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-controlled",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-disabled",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-description",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-description.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-validation",
    type: "registry:example",
    registryDependencies: ["combobox"],
    files: [
      {
        path: "examples/combobox-validation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "conversation-demo",
    type: "registry:example",
    registryDependencies: ["conversation", "message"],
    files: [
      {
        path: "examples/conversation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "image-demo",
    type: "registry:example",
    registryDependencies: ["image"],
    dependencies: ["ai"],
    files: [
      {
        path: "examples/image-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "inline-citation-demo",
    type: "registry:example",
    registryDependencies: [
      "inline-citation",
      "hover-card",
      "badge",
      "carousel",
    ],
    dependencies: ["ai"],
    files: [
      {
        path: "examples/inline-citation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-dropdown-menu",
    type: "registry:example",
    registryDependencies: ["command", "menu", "button"],
    files: [
      {
        path: "examples/combobox-dropdown-menu.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-form",
    type: "registry:example",
    registryDependencies: ["command", "form"],
    files: [
      {
        path: "examples/combobox-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-popover",
    type: "registry:example",
    registryDependencies: ["combobox", "popover"],
    files: [
      {
        path: "examples/combobox-popover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-responsive",
    type: "registry:example",
    registryDependencies: ["combobox", "popover", "drawer"],
    files: [
      {
        path: "examples/combobox-responsive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "command-demo",
    type: "registry:example",
    registryDependencies: ["command"],
    files: [
      {
        path: "examples/command-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "command-dialog",
    type: "registry:example",
    registryDependencies: ["command", "dialog"],
    files: [
      {
        path: "examples/command-dialog.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "data-table-demo",
    type: "registry:example",
    registryDependencies: ["data-table"],
    files: [
      {
        path: "examples/data-table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "date-field-demo",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-field-disabled",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-disabled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-field-validation",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-validation.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-field-controlled",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-controlled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-field-min-max",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-min-max.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-field-granularity",
    type: "registry:example",
    registryDependencies: ["date-field"],
    files: [
      {
        path: "examples/date-field-granularity.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-demo",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-disabled",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-disabled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-validation",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-validation.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-controlled",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-controlled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-min-max",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-min-max.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-granularity",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-granularity.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-picker-unavailable-dates",
    type: "registry:example",
    registryDependencies: ["date-picker"],
    files: [
      {
        path: "examples/date-picker-unavailable-dates.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-demo",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-disabled",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-disabled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-validation",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-validation.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-controlled",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-controlled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-min-max",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-min-max.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "date-range-picker-unavailable-dates",
    type: "registry:example",
    registryDependencies: ["date-range-picker"],
    files: [
      {
        path: "examples/date-range-picker-unavailable-dates.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "dialog-demo",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "examples/dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-close-button",
    type: "registry:example",
    registryDependencies: ["dialog", "button"],
    files: [
      {
        path: "examples/dialog-close-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-alert",
    type: "registry:example",
    registryDependencies: ["dialog", "modal", "button"],
    files: [
      {
        path: "examples/dialog-alert.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "drawer-demo",
    type: "registry:example",
    registryDependencies: ["drawer"],
    files: [
      {
        path: "examples/drawer-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-demo",
    type: "registry:example",
    registryDependencies: ["empty", "button"],
    files: [
      {
        path: "examples/empty-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-icon",
    type: "registry:example",
    registryDependencies: ["empty"],
    files: [
      {
        path: "examples/empty-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-avatar",
    type: "registry:example",
    registryDependencies: ["empty", "button", "avatar"],
    files: [
      {
        path: "examples/empty-avatar.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-avatar-group",
    type: "registry:example",
    registryDependencies: ["empty", "button", "avatar"],
    files: [
      {
        path: "examples/empty-avatar-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-input-group",
    type: "registry:example",
    registryDependencies: ["empty", "button", "input"],
    files: [
      {
        path: "examples/empty-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-outline",
    type: "registry:example",
    registryDependencies: ["empty", "button"],
    files: [
      {
        path: "examples/empty-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-background",
    type: "registry:example",
    registryDependencies: ["empty"],
    files: [
      {
        path: "examples/empty-background.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-demo",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-input",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-input.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-textarea",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-textarea.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-fieldset",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-fieldset.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-radio",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-radio.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-checkbox",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-checkbox.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-switch",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-switch.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-slider",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-slider.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-select",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-select.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-choice-card",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-choice-card.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-group",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "field-responsive",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-responsive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-trigger-demo",
    type: "registry:example",
    registryDependencies: ["file-trigger", "button"],
    files: [
      {
        path: "examples/file-trigger-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-trigger-multiple",
    type: "registry:example",
    registryDependencies: ["file-trigger", "button"],
    files: [
      {
        path: "examples/file-trigger-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-trigger-image",
    type: "registry:example",
    registryDependencies: ["file-trigger", "button"],
    files: [
      {
        path: "examples/file-trigger-image.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-trigger-directory",
    type: "registry:example",
    registryDependencies: ["file-trigger", "button"],
    files: [
      {
        path: "examples/file-trigger-directory.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-trigger-camera",
    type: "registry:example",
    registryDependencies: ["file-trigger", "button"],
    files: [
      {
        path: "examples/file-trigger-camera.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "form-rhf-demo",
    type: "registry:example",
    registryDependencies: ["field", "input", "input-group", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-input",
    type: "registry:example",
    registryDependencies: ["field", "input", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-input.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-select",
    type: "registry:example",
    registryDependencies: ["field", "select", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-select.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-checkbox",
    type: "registry:example",
    registryDependencies: ["field", "checkbox", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-checkbox.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-switch",
    type: "registry:example",
    registryDependencies: ["field", "switch", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-switch.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-textarea",
    type: "registry:example",
    registryDependencies: ["field", "textarea", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-textarea.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-radiogroup",
    type: "registry:example",
    registryDependencies: ["field", "radio-group", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-radiogroup.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-array",
    type: "registry:example",
    registryDependencies: ["field", "input", "input-group", "button", "card"],
    files: [
      {
        path: "examples/form-rhf-array.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-complex",
    type: "registry:example",
    registryDependencies: [
      "field",
      "button",
      "card",
      "checkbox",
      "radio-group",
      "select",
      "switch",
    ],
    files: [
      {
        path: "examples/form-rhf-complex.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-rhf-password",
    type: "registry:example",
    registryDependencies: [
      "field",
      "input-group",
      "progress",
      "button",
      "card",
    ],
    files: [
      {
        path: "examples/form-rhf-password.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
  },
  {
    name: "form-tanstack-demo",
    type: "registry:example",
    registryDependencies: ["field", "input", "input-group", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-input",
    type: "registry:example",
    registryDependencies: ["field", "input", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-input.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-textarea",
    type: "registry:example",
    registryDependencies: ["field", "textarea", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-textarea.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-select",
    type: "registry:example",
    registryDependencies: ["field", "select", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-select.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-checkbox",
    type: "registry:example",
    registryDependencies: ["field", "checkbox", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-checkbox.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-switch",
    type: "registry:example",
    registryDependencies: ["field", "switch", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-switch.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-radiogroup",
    type: "registry:example",
    registryDependencies: ["field", "radio-group", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-radiogroup.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-array",
    type: "registry:example",
    registryDependencies: ["field", "input", "input-group", "button", "card"],
    files: [
      {
        path: "examples/form-tanstack-array.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "form-tanstack-complex",
    type: "registry:example",
    registryDependencies: [
      "field",
      "button",
      "card",
      "checkbox",
      "radio-group",
      "select",
      "switch",
    ],
    files: [
      {
        path: "examples/form-tanstack-complex.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@tanstack/react-form", "zod"],
  },
  {
    name: "drawer-dialog",
    type: "registry:example",
    registryDependencies: ["drawer", "dialog"],
    files: [
      {
        path: "examples/drawer-dialog.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-demo",
    type: "registry:example",
    registryDependencies: ["grid-list"],
    files: [
      {
        path: "examples/grid-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-selection",
    type: "registry:example",
    registryDependencies: ["grid-list", "checkbox"],
    files: [
      {
        path: "examples/grid-list-selection.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-actions",
    type: "registry:example",
    registryDependencies: ["grid-list", "button"],
    files: [
      {
        path: "examples/grid-list-actions.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-links",
    type: "registry:example",
    registryDependencies: ["grid-list"],
    files: [
      {
        path: "examples/grid-list-links.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-disabled",
    type: "registry:example",
    registryDependencies: ["grid-list"],
    files: [
      {
        path: "examples/grid-list-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "grid-list-empty",
    type: "registry:example",
    registryDependencies: ["grid-list"],
    files: [
      {
        path: "examples/grid-list-empty.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "hover-card-demo",
    type: "registry:example",
    registryDependencies: ["hover-card"],
    files: [
      {
        path: "examples/hover-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-disabled",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-file",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-file.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-form",
    type: "registry:example",
    registryDependencies: ["input", "button", "form"],
    files: [
      {
        path: "examples/input-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-button",
    type: "registry:example",
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "examples/input-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-label",
    type: "registry:example",
    registryDependencies: ["input", "button", "label"],
    files: [
      {
        path: "examples/input-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-text",
    type: "registry:example",
    registryDependencies: ["input", "button", "label"],
    files: [
      {
        path: "examples/input-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-demo",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-label",
    type: "registry:example",
    registryDependencies: ["input-group", "label"],
    files: [
      {
        path: "examples/input-group-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-text",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-tooltip",
    type: "registry:example",
    registryDependencies: ["input-group", "tooltip"],
    files: [
      {
        path: "examples/input-group-tooltip.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-button",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-button-group",
    type: "registry:example",
    registryDependencies: ["input-group", "button-group"],
    files: [
      {
        path: "examples/input-group-button-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-dropdown",
    type: "registry:example",
    registryDependencies: ["input-group", "menu", "button"],
    files: [
      {
        path: "examples/input-group-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-spinner",
    type: "registry:example",
    registryDependencies: ["input-group", "spinner"],
    files: [
      {
        path: "examples/input-group-spinner.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-textarea",
    type: "registry:example",
    registryDependencies: ["input-group", "textarea"],
    files: [
      {
        path: "examples/input-group-textarea.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-icon",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-custom",
    type: "registry:example",
    registryDependencies: [
      "input-group",
      "badge",
      "progress",
      "menu",
      "tooltip",
    ],
    files: [
      {
        path: "examples/input-group-custom.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-demo",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "examples/input-otp-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-pattern",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "examples/input-otp-pattern.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-separator",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "examples/input-otp-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-controlled",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "examples/input-otp-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-form",
    type: "registry:example",
    registryDependencies: ["input-otp", "form"],
    files: [
      {
        path: "examples/input-otp-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-demo",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-size",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-variant",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-variant.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-icon",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-image",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-image.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-avatar",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-avatar.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-group",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-header",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-header.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-dropdown",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "item-link",
    type: "registry:example",
    registryDependencies: ["item"],
    files: [
      {
        path: "examples/item-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-demo",
    type: "registry:example",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "examples/kbd-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-tooltip",
    type: "registry:example",
    registryDependencies: ["kbd", "tooltip", "button"],
    files: [
      {
        path: "examples/kbd-tooltip.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-demo",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-multiple",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-sections",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-sections.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-disabled",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-empty",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-empty.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-links",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-links.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "list-box-dynamic",
    type: "registry:example",
    registryDependencies: ["list-box"],
    files: [
      {
        path: "examples/list-box-dynamic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-input-group",
    type: "registry:example",
    registryDependencies: ["kbd", "input", "button", "label"],
    files: [
      {
        path: "examples/kbd-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-button",
    type: "registry:example",
    registryDependencies: ["kbd", "button"],
    files: [
      {
        path: "examples/kbd-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "kbd-group",
    type: "registry:example",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "examples/kbd-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "label-demo",
    type: "registry:example",
    registryDependencies: ["label"],
    files: [
      {
        path: "examples/label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "loader-demo",
    type: "registry:example",
    registryDependencies: ["loader"],
    files: [
      {
        path: "examples/loader-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "open-in-chat-demo",
    type: "registry:example",
    registryDependencies: ["open-in-chat", "button", "menu"],
    files: [
      {
        path: "examples/open-in-chat-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "plan-demo",
    type: "registry:example",
    registryDependencies: ["plan", "card", "disclosure", "button", "shimmer"],
    files: [
      {
        path: "examples/plan-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-input-demo",
    type: "registry:example",
    registryDependencies: ["prompt-input", "button", "input-group"],
    dependencies: ["ai", "nanoid"],
    files: [
      {
        path: "examples/prompt-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "queue-demo",
    type: "registry:example",
    registryDependencies: ["queue", "button", "disclosure", "scroll-area"],
    files: [
      {
        path: "examples/queue-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "reasoning-demo",
    type: "registry:example",
    registryDependencies: ["reasoning", "disclosure", "response", "shimmer"],
    files: [
      {
        path: "examples/reasoning-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "response-demo",
    type: "registry:example",
    registryDependencies: ["response"],
    dependencies: ["streamdown"],
    files: [
      {
        path: "examples/response-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sources-demo",
    type: "registry:example",
    registryDependencies: ["sources", "disclosure"],
    files: [
      {
        path: "examples/sources-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "task-demo",
    type: "registry:example",
    registryDependencies: ["task", "disclosure"],
    files: [
      {
        path: "examples/task-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tool-demo",
    type: "registry:example",
    registryDependencies: ["tool", "disclosure", "badge", "code-block"],
    dependencies: ["ai"],
    files: [
      {
        path: "examples/tool-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "web-preview-demo",
    type: "registry:example",
    registryDependencies: [
      "web-preview",
      "button",
      "disclosure",
      "input",
      "tooltip",
      "badge",
      "scroll-area",
    ],
    files: [
      {
        path: "examples/web-preview-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menubar-demo",
    type: "registry:example",
    registryDependencies: ["menubar"],
    files: [
      {
        path: "examples/menubar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "message-demo",
    type: "registry:example",
    registryDependencies: ["message", "avatar"],
    files: [
      {
        path: "examples/message-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "message-flat",
    type: "registry:example",
    registryDependencies: ["message", "avatar"],
    files: [
      {
        path: "examples/message-flat.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "navigation-menu-demo",
    type: "registry:example",
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "examples/navigation-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-custom-steppers",
    type: "registry:example",
    registryDependencies: ["number-field", "button-group", "field"],
    files: [
      {
        path: "examples/number-field-custom-steppers.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-demo",
    type: "registry:example",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "examples/number-field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-disabled",
    type: "registry:example",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "examples/number-field-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-percentage",
    type: "registry:example",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "examples/number-field-percentage.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-validation",
    type: "registry:example",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "examples/number-field-validation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "number-field-with-description",
    type: "registry:example",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "examples/number-field-with-description.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "pagination-demo",
    type: "registry:example",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "examples/pagination-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["popover"],
    files: [
      {
        path: "examples/popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-demo",
    type: "registry:example",
    registryDependencies: ["progress"],
    files: [
      {
        path: "examples/progress-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-bar-demo",
    type: "registry:example",
    registryDependencies: ["progress-bar"],
    files: [
      {
        path: "examples/progress-bar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-bar-indeterminate",
    type: "registry:example",
    registryDependencies: ["progress-bar"],
    files: [
      {
        path: "examples/progress-bar-indeterminate.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-bar-label",
    type: "registry:example",
    registryDependencies: ["progress-bar"],
    files: [
      {
        path: "examples/progress-bar-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-bar-value-scale",
    type: "registry:example",
    registryDependencies: ["progress-bar"],
    files: [
      {
        path: "examples/progress-bar-value-scale.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-demo",
    type: "registry:example",
    registryDependencies: ["radio-group"],
    files: [
      {
        path: "examples/radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-form",
    type: "registry:example",
    registryDependencies: ["radio-group", "form"],
    files: [
      {
        path: "examples/radio-group-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "range-calendar-demo",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "range-calendar-controlled",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-controlled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "range-calendar-disabled",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-disabled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "range-calendar-min-max",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-min-max.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "range-calendar-unavailable-dates",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-unavailable-dates.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "range-calendar-non-contiguous",
    type: "registry:example",
    registryDependencies: ["range-calendar"],
    files: [
      {
        path: "examples/range-calendar-non-contiguous.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "resizable-demo",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "examples/resizable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-demo-with-handle",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "examples/resizable-demo-with-handle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-vertical",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "examples/resizable-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-handle",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "examples/resizable-handle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-demo",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "examples/scroll-area-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-horizontal-demo",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "examples/scroll-area-horizontal-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "search-field-demo",
    type: "registry:example",
    registryDependencies: ["search-field"],
    files: [
      {
        path: "examples/search-field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "search-field-with-description",
    type: "registry:example",
    registryDependencies: ["search-field"],
    files: [
      {
        path: "examples/search-field-with-description.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "search-field-disabled",
    type: "registry:example",
    registryDependencies: ["search-field"],
    files: [
      {
        path: "examples/search-field-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "search-field-controlled",
    type: "registry:example",
    registryDependencies: ["search-field"],
    files: [
      {
        path: "examples/search-field-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "search-field-with-button",
    type: "registry:example",
    registryDependencies: ["search-field", "button"],
    files: [
      {
        path: "examples/search-field-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-scrollable",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-scrollable.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-form",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sheet-demo",
    type: "registry:example",
    registryDependencies: ["sheet"],
    files: [
      {
        path: "examples/sheet-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sheet-side",
    type: "registry:example",
    registryDependencies: ["sheet"],
    files: [
      {
        path: "examples/sheet-side.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "shimmer-demo",
    type: "registry:example",
    registryDependencies: ["shimmer"],
    files: [
      {
        path: "examples/shimmer-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "skeleton-demo",
    type: "registry:example",
    registryDependencies: ["skeleton"],
    files: [
      {
        path: "examples/skeleton-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "suggestion-demo",
    type: "registry:example",
    registryDependencies: ["suggestion", "scroll-area", "button"],
    files: [
      {
        path: "examples/suggestion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "skeleton-card",
    type: "registry:example",
    registryDependencies: ["skeleton"],
    files: [
      {
        path: "examples/skeleton-card.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["slider"],
    files: [
      {
        path: "examples/slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-demo",
    type: "registry:example",
    registryDependencies: ["sonner"],
    files: [
      {
        path: "examples/sonner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-types",
    type: "registry:example",
    registryDependencies: ["sonner"],
    files: [
      {
        path: "examples/sonner-types.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-demo",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-basic",
    type: "registry:example",
    registryDependencies: ["spinner", "button"],
    files: [
      {
        path: "examples/spinner-basic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-button",
    type: "registry:example",
    registryDependencies: ["spinner", "button"],
    files: [
      {
        path: "examples/spinner-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-badge",
    type: "registry:example",
    registryDependencies: ["spinner", "badge"],
    files: [
      {
        path: "examples/spinner-badge.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-input-group",
    type: "registry:example",
    registryDependencies: ["spinner", "button", "input"],
    files: [
      {
        path: "examples/spinner-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-empty",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-empty.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-color",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-color.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-custom",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-custom.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-size",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-item",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "examples/spinner-item.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "examples/switch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-form",
    type: "registry:example",
    registryDependencies: ["switch", "form"],
    files: [
      {
        path: "examples/switch-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "table-demo",
    type: "registry:example",
    registryDependencies: ["table"],
    files: [
      {
        path: "examples/table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-demo",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-variants",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-removable",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-removable.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-selection",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-selection.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-disabled",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-links",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-links.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tag-group-empty",
    type: "registry:example",
    registryDependencies: ["tag-group"],
    files: [
      {
        path: "examples/tag-group-empty.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: ["tabs", "card", "input", "label", "button"],
    files: [
      {
        path: "examples/tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-disabled",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-orientation",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-orientation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-icons",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-controlled",
    type: "registry:example",
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "examples/tabs-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-demo",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "examples/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-disabled",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "examples/textarea-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-form",
    type: "registry:example",
    registryDependencies: ["textarea", "form"],
    files: [
      {
        path: "examples/textarea-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-button",
    type: "registry:example",
    registryDependencies: ["textarea", "button"],
    files: [
      {
        path: "examples/textarea-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-label",
    type: "registry:example",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "examples/textarea-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-text",
    type: "registry:example",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "examples/textarea-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-demo",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-with-description",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-with-description.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-disabled",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-validation",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-validation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-types",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-types.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "text-field-readonly",
    type: "registry:example",
    registryDependencies: ["text-field"],
    files: [
      {
        path: "examples/text-field-readonly.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "time-field-demo",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-description",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-description.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-disabled",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-disabled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-granularity",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-granularity.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-hour-cycle",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-hour-cycle.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-validation",
    type: "registry:example",
    registryDependencies: ["time-field", "button"],
    files: [
      {
        path: "examples/time-field-validation.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "time-field-controlled",
    type: "registry:example",
    registryDependencies: ["time-field"],
    files: [
      {
        path: "examples/time-field-controlled.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["@internationalized/date"],
  },
  {
    name: "toast-demo",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "examples/toast-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-destructive",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "examples/toast-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-simple",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "examples/toast-simple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-with-action",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "examples/toast-with-action.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-with-title",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "examples/toast-with-title.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-demo",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-default",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-default.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-outline",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-disabled",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-size",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-controlled",
    type: "registry:example",
    registryDependencies: ["toggle-button"],
    files: [
      {
        path: "examples/toggle-button-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-group-demo",
    type: "registry:example",
    registryDependencies: ["toggle-button-group"],
    files: [
      {
        path: "examples/toggle-button-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-group-default",
    type: "registry:example",
    registryDependencies: ["toggle-button-group"],
    files: [
      {
        path: "examples/toggle-button-group-default.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-button-group-size",
    type: "registry:example",
    registryDependencies: ["toggle-button-group"],
    files: [
      {
        path: "examples/toggle-button-group-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-placement",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-placement.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-icon",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-delay",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-delay.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-demo",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-selection",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-selection.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-single-selection",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-single-selection.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-disabled",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-actions",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-actions.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-links",
    type: "registry:example",
    registryDependencies: ["tree"],
    files: [
      {
        path: "examples/tree-links.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tree-dynamic",
    type: "registry:example",
    registryDependencies: ["tree", "button"],
    files: [
      {
        path: "examples/tree-dynamic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-blockquote",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-blockquote.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-demo",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h1",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-h1.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h2",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-h2.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h3",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-h3.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h4",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-h4.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-inline-code",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-inline-code.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-large",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-large.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-lead",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-lead.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-list",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-list.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-muted",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-muted.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-p",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-p.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-small",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-table",
    type: "registry:example",
    files: [
      {
        path: "examples/typography-table.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "mode-toggle",
    type: "registry:example",
    files: [
      {
        path: "examples/mode-toggle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-bar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-grid",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-bar-demo-grid.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-axis",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-bar-demo-axis.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-tooltip",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-bar-demo-tooltip.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-legend",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-bar-demo-legend.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-tooltip-demo",
    type: "registry:example",
    files: [
      {
        path: "examples/chart-tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-hijri",
    description: "A Persian calendar.",
    type: "registry:example",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "examples/calendar-hijri.tsx",
        type: "registry:example",
      },
    ],
    categories: ["calendar", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
      mobile: "component",
    },
  },
  {
    name: "disclosure-demo",
    type: "registry:example",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "examples/disclosure-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "disclosure-group-demo",
    type: "registry:example",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "examples/disclosure-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "disclosure-group-default-expanded",
    type: "registry:example",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "examples/disclosure-group-default-expanded.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "disclosure-group-multiple",
    type: "registry:example",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "examples/disclosure-group-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "disclosure-group-controlled",
    type: "registry:example",
    registryDependencies: ["disclosure", "button"],
    files: [
      {
        path: "examples/disclosure-group-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "disclosure-group-disabled",
    type: "registry:example",
    registryDependencies: ["disclosure"],
    files: [
      {
        path: "examples/disclosure-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menu-demo",
    type: "registry:example",
    registryDependencies: ["menu"],
    files: [
      {
        path: "examples/menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menu-submenu",
    type: "registry:example",
    registryDependencies: ["menu"],
    files: [
      {
        path: "examples/menu-submenu.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menu-command",
    type: "registry:example",
    registryDependencies: ["menu", "command", "avatar"],
    files: [
      {
        path: "examples/menu-command.tsx",
        type: "registry:example",
      },
    ],
  },
]
