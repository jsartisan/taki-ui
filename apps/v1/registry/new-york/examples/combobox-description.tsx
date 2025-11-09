import { ComboBox, ComboBoxItem } from "@/registry/new-york/ui/combobox"

const editors = [
  { id: "vscode", name: "Visual Studio Code" },
  { id: "sublime", name: "Sublime Text" },
  { id: "atom", name: "Atom" },
  { id: "vim", name: "Vim" },
  { id: "neovim", name: "Neovim" },
  { id: "emacs", name: "Emacs" },
]

export default function ComboboxDescription() {
  return (
    <ComboBox
      label="Code Editor"
      description="Choose your preferred code editor for development."
      placeholder="Search editors..."
      className="w-full max-w-xs"
    >
      {editors.map((editor) => (
        <ComboBoxItem key={editor.id} id={editor.id} textValue={editor.name}>
          {editor.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  )
}
