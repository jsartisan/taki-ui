"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york/ui/field"

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
})

export default function CheckboxReactHookFormSingle() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
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
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-4"
    >
      <Controller
        control={form.control}
        name="mobile"
        render={({ field }) => {
          const checkboxId = "checkbox-form-single-mobile"
          return (
            <Field
              orientation="horizontal"
              className="items-start gap-2 rounded-md border p-4 shadow-sm"
            >
              <Checkbox
                id={checkboxId}
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
              <div className="space-y-1 leading-none">
                <FieldLabel htmlFor={checkboxId}>
                  Use different settings for my mobile devices
                </FieldLabel>
                <FieldDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FieldDescription>
              </div>
            </Field>
          )
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
