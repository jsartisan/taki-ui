import { NumberField } from "@/registry/v1/ui/number-field"

export default function NumberFieldDisabled() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <NumberField label="Items in stock" defaultValue={42} isDisabled />
    </div>
  )
}
