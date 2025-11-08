import { NumberField } from "@/registry/v1/ui/number-field"

export default function NumberFieldWithDescription() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <NumberField
        label="Price"
        description="Enter the product price in dollars."
        defaultValue={29.99}
        minValue={0}
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      />
    </div>
  )
}
