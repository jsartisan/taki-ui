"use client"

import { DateField } from "@/registry/new-york-v4/ui/date-field"

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
