import { NumberField } from "@/registry/new-york/ui/number-field"

export default function NumberFieldPercentage() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <NumberField
        label="Discount"
        description="Enter the discount percentage"
        defaultValue={15}
        minValue={0}
        maxValue={100}
        formatOptions={{
          style: "percent",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }}
      />
    </div>
  )
}
