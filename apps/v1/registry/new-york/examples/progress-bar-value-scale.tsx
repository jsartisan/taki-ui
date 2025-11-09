import { ProgressBar } from "@/registry/new-york/ui/progress-bar"

export default function ProgressBarValueScale() {
  return (
    <div className="flex flex-col gap-4">
      <ProgressBar
        label="Storage space"
        formatOptions={{ style: "unit", unit: "gigabyte" }}
        value={450}
        maxValue={1000}
      />
      <ProgressBar
        label="Download progress"
        formatOptions={{ style: "unit", unit: "megabyte" }}
        value={275}
        maxValue={500}
      />
    </div>
  )
}
