"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/new-york/ui/field"

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export default function CheckboxReactHookFormMultiple() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Controller
        control={form.control}
        name="items"
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            className="flex flex-col gap-4"
          >
            <div className="space-y-1">
              <FieldLabel className="text-base">Sidebar</FieldLabel>
              <FieldDescription>
                Select the items you want to display in the sidebar.
              </FieldDescription>
            </div>
            <div className="flex flex-col gap-3">
              {items.map((item) => {
                const checkboxId = `checkbox-form-multiple-${item.id}`
                const value = field.value ?? []
                const isChecked = value.includes(item.id)
                return (
                  <div
                    key={item.id}
                    className="flex flex-row items-center gap-2"
                  >
                    <Checkbox
                      id={checkboxId}
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        if (checked === true) {
                          field.onChange([...value, item.id])
                          return
                        }
                        field.onChange(value.filter((v) => v !== item.id))
                      }}
                    />
                    <FieldLabel
                      htmlFor={checkboxId}
                      className="text-sm font-normal"
                    >
                      {item.label}
                    </FieldLabel>
                  </div>
                )
              })}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
