"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"
import { NumberField as AriaNumberField } from "react-aria-components"

import { Button } from "@/registry/v1/ui/button"
import { ButtonGroup } from "@/registry/v1/ui/button-group"
import {
  FieldDescription,
  FieldLabel,
  fieldVariants,
} from "@/registry/v1/ui/field"

import { Input } from "../ui/input"

export default function NumberFieldCustomSteppers() {
  const [value, setValue] = useState(10)

  return (
    <div className="grid w-full max-w-md gap-4">
      <AriaNumberField
        value={value}
        onChange={setValue}
        minValue={0}
        maxValue={100}
        className={fieldVariants()}
      >
        <FieldLabel>Quantity</FieldLabel>
        <ButtonGroup>
          <Button slot="decrement" aria-label="Decrease" variant="outline">
            <MinusIcon className="h-4 w-4" />
          </Button>
          <Input />
          <Button slot="increment" aria-label="Increase" variant="outline">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </ButtonGroup>
        <FieldDescription>
          Use the buttons to adjust the quantity
        </FieldDescription>
      </AriaNumberField>
    </div>
  )
}
