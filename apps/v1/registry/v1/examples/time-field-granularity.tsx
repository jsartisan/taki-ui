import { TimeField } from "@/registry/new-york-v4/ui/time-field"

export default function TimeFieldGranularityDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TimeField label="Hour and minute" granularity="minute" />
      <TimeField label="Hour, minute, and second" granularity="second" />
    </div>
  )
}
