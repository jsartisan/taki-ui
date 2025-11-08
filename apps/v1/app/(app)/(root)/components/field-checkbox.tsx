import { Checkbox } from "@/registry/v1/ui/checkbox"
import { Field, FieldLabel } from "@/registry/v1/ui/field"

export function FieldCheckbox() {
  return (
    <Field orientation="horizontal">
      <Checkbox id="checkbox-demo" defaultSelected />
      <FieldLabel htmlFor="checkbox-demo" className="line-clamp-1 font-normal">
        I agree to the terms and conditions
      </FieldLabel>
    </Field>
  )
}
