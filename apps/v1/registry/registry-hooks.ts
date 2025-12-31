import { type Registry } from "shadcn/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-controllable-state",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-controllable-state.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
]
