"use client"

import { useState } from "react"

import { NumberField } from "@/registry/v1/ui/number-field"

export default function NumberFieldValidation() {
  const [value, setValue] = useState(150)

  return (
    <div className="grid w-full max-w-md gap-4">
      <NumberField
        label="Age"
        description="Enter your age (must be between 18 and 100)"
        value={value}
        onChange={setValue}
        minValue={18}
        maxValue={100}
        isRequired
        errorMessage={(validation) => {
          if (validation.validationErrors.includes("rangeUnderflow")) {
            return "You must be at least 18 years old"
          }
          if (validation.validationErrors.includes("rangeOverflow")) {
            return "Age must be 100 or less"
          }
          if (validation.validationErrors.includes("valueMissing")) {
            return "Age is required"
          }
          return "Invalid age"
        }}
      />
    </div>
  )
}
