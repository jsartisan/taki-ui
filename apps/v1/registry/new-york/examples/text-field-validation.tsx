"use client"

import { useState } from "react"

import { TextField } from "@/registry/new-york/ui/text-field"

export default function TextFieldValidation() {
  const [value, setValue] = useState("")

  return (
    <div className="grid w-full max-w-md gap-4">
      <TextField
        label="Username"
        description="Username must be at least 3 characters long"
        placeholder="Enter username"
        value={value}
        onChange={setValue}
        minLength={3}
        maxLength={20}
        isRequired
        errorMessage={(validation) => {
          if (validation.validationErrors.includes("tooShort")) {
            return "Username must be at least 3 characters"
          }
          if (validation.validationErrors.includes("tooLong")) {
            return "Username must be 20 characters or less"
          }
          if (validation.validationErrors.includes("valueMissing")) {
            return "Username is required"
          }
          return "Invalid username"
        }}
      />
    </div>
  )
}
