"use client"

import { Checkbox } from "@/registry/v1/ui/checkbox"
import { Label } from "@/registry/v1/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Checkbox id="terms">Accept terms and conditions</Checkbox>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultSelected />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <Checkbox id="toggle" isDisabled>
        Enable notifications
      </Checkbox>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[data-selected=true]]:border-blue-600 has-[[data-selected=true]]:bg-blue-50 dark:has-[[data-selected=true]]:border-blue-900 dark:has-[[data-selected=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultSelected
          className="[&[data-selected=true]>[data-slot=checkbox-indicator]]:border-blue-600 [&[data-selected=true]>[data-slot=checkbox-indicator]]:bg-blue-600 [&[data-selected=true]>[data-slot=checkbox-indicator]]:text-white dark:[&[data-selected=true]>[data-slot=checkbox-indicator]]:border-blue-700 dark:[&[data-selected=true]>[data-slot=checkbox-indicator]]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  )
}
