import { TimeField } from "@/registry/new-york/ui/time-field"

export default function TimeFieldHourCycleDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TimeField label="12-hour format" hourCycle={12} />
      <TimeField label="24-hour format" hourCycle={24} />
    </div>
  )
}
