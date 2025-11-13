import { ProgressBar } from "@/registry/new-york/ui/progress-bar"

export default function ProgressBarLabel() {
  return (
    <ProgressBar
      label="Processing files"
      value={45}
      formatOptions={{ style: "decimal" }}
      valueLabel="15 of 60 files"
    />
  )
}
