"use client"

import { useState } from "react"
import { Time } from "@internationalized/date"

import { Button } from "@/registry/new-york-v4/ui/button"
import { TimeField } from "@/registry/new-york-v4/ui/time-field"

export default function TimeFieldValidationDemo() {
  const [time, setTime] = useState<Time | null>(null)

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Time submitted: ${time?.toString()}`)
      }}
    >
      <TimeField
        label="Meeting time"
        description="Select a time between 9 AM and 5 PM."
        isRequired
        value={time}
        onChange={setTime}
        minValue={new Time(9)}
        maxValue={new Time(17)}
        errorMessage="Please select a time between 9 AM and 5 PM."
      />
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </form>
  )
}
