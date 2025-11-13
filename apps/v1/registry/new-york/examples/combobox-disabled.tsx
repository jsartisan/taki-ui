import { ComboBox, ComboBoxItem } from "@/registry/new-york/ui/combobox"

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
]

export default function ComboboxDisabled() {
  return (
    <ComboBox
      label="Disabled ComboBox"
      placeholder="Cannot interact..."
      className="w-full max-w-xs"
      isDisabled
    >
      {options.map((option) => (
        <ComboBoxItem key={option.id} id={option.id} textValue={option.name}>
          {option.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  )
}
