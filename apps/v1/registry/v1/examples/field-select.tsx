import { Select, SelectItem } from "@/registry/v1/ui/select"

export default function FieldSelect() {
  return (
    <div className="w-full max-w-md">
      <Select
        label="Department"
        description="Select your department or area of work."
      >
        <SelectItem id="engineering">Engineering</SelectItem>
        <SelectItem id="design">Design</SelectItem>
        <SelectItem id="marketing">Marketing</SelectItem>
        <SelectItem id="sales">Sales</SelectItem>
        <SelectItem id="support">Customer Support</SelectItem>
        <SelectItem id="hr">Human Resources</SelectItem>
        <SelectItem id="finance">Finance</SelectItem>
        <SelectItem id="operations">Operations</SelectItem>
      </Select>
    </div>
  )
}
