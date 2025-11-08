import { NumberField } from "@/registry/new-york-v4/ui/number-field"

export default function NumberFieldDemo() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <NumberField
        label="Quantity"
        defaultValue={5}
        minValue={0}
        maxValue={100}
      />
    </div>
  )
}
