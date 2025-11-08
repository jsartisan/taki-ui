"use client"

import { ComboBox, ComboBoxItem } from "@/registry/new-york-v4/ui/combobox"

const frameworks = [
  { id: "next.js", name: "Next.js" },
  { id: "sveltekit", name: "SvelteKit" },
  { id: "nuxt.js", name: "Nuxt.js" },
  { id: "remix", name: "Remix" },
  { id: "astro", name: "Astro" },
  { id: "vue", name: "Vue" },
  { id: "angular", name: "Angular" },
]

export default function ComboboxDemo() {
  return (
    <ComboBox
      label="Favorite Framework"
      placeholder="Search framework..."
      className="w-full max-w-xs"
    >
      {frameworks.map((framework) => (
        <ComboBoxItem
          key={framework.id}
          id={framework.id}
          textValue={framework.name}
        >
          {framework.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  )
}
