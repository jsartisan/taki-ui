"use client"

import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/new-york/ui/field"
import { Slider } from "@/registry/new-york/ui/slider"

export function FieldSlider() {
  const [value, setValue] = useState([200, 800])
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>Price Range</FieldTitle>
        <FieldDescription>
          Set your budget range ($
          <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </FieldDescription>
        <Slider
          value={value}
          onChange={setValue}
          maxValue={1000}
          minValue={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field>
    </div>
  )
}
