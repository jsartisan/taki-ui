"use client"

import { Checkbox, CheckboxGroup } from "@/registry/v1/ui/checkbox"

export default function CheckboxGroupDemo() {
  return (
    <div className="flex flex-col gap-8">
      <CheckboxGroup
        label="Notifications"
        description="Select which notifications you'd like to receive."
      >
        <Checkbox value="email">Email notifications</Checkbox>
        <Checkbox value="push">Push notifications</Checkbox>
        <Checkbox value="sms">SMS notifications</Checkbox>
      </CheckboxGroup>
    </div>
  )
}
