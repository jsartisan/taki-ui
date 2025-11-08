import {
  ComboBox,
  ComboBoxItem,
  ComboBoxSection,
} from "@/registry/v1/ui/combobox"

export default function ComboboxSections() {
  return (
    <ComboBox
      label="Select Language"
      placeholder="Search languages..."
      className="w-full max-w-xs"
    >
      <ComboBoxSection title="Popular">
        <ComboBoxItem id="js" textValue="JavaScript">
          JavaScript
        </ComboBoxItem>
        <ComboBoxItem id="ts" textValue="TypeScript">
          TypeScript
        </ComboBoxItem>
        <ComboBoxItem id="python" textValue="Python">
          Python
        </ComboBoxItem>
      </ComboBoxSection>
      <ComboBoxSection title="Web">
        <ComboBoxItem id="html" textValue="HTML">
          HTML
        </ComboBoxItem>
        <ComboBoxItem id="css" textValue="CSS">
          CSS
        </ComboBoxItem>
        <ComboBoxItem id="php" textValue="PHP">
          PHP
        </ComboBoxItem>
      </ComboBoxSection>
      <ComboBoxSection title="Systems">
        <ComboBoxItem id="rust" textValue="Rust">
          Rust
        </ComboBoxItem>
        <ComboBoxItem id="go" textValue="Go">
          Go
        </ComboBoxItem>
        <ComboBoxItem id="c" textValue="C">
          C
        </ComboBoxItem>
        <ComboBoxItem id="cpp" textValue="C++">
          C++
        </ComboBoxItem>
      </ComboBoxSection>
    </ComboBox>
  )
}
