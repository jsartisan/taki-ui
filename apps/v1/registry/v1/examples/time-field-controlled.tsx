"use client"

import { useState } from "react"
import { Time } from "@internationalized/date"

import { TimeField } from "@/registry/v1/ui/time-field"

export default function TimeFieldControlledDemo() {
  const [time, setTime] = useState(new Time(9, 0))

  return (
    <div className="flex flex-col gap-4">
      <TimeField label="Appointment time" value={time} onChange={setTime} />
      <p className="text-muted-foreground text-sm">
        Selected time: {time.toString()}
      </p>
    </div>
  )
}
