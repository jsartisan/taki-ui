import { Radio, RadioGroup } from "@/registry/v1/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <div className="mx-auto w-max">
      <RadioGroup defaultValue="comfortable" label="Comfort Level">
        <Radio value="default" id="r1">
          Default
        </Radio>
        <Radio value="comfortable" id="r2">
          Comfortable
        </Radio>
        <Radio value="compact" id="r3">
          Compact
        </Radio>
      </RadioGroup>
    </div>
  )
}
