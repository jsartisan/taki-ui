"use client"

import { DatePicker } from "@/registry/v1/ui/date-picker"

export default function DatePickerValidation() {
  return (
    <DatePicker
      label="Appointment date"
      description="Please select a date for your appointment."
      isRequired
      errorMessage="Please select a valid date."
    />
  )
}
