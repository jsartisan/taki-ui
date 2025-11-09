"use client"

import { DateField } from "@/registry/new-york/ui/date-field"

export default function DateFieldValidation() {
  return (
    <DateField
      label="Birth date"
      description="Enter your birth date."
      isRequired
      errorMessage="Please enter a valid date."
    />
  )
}
