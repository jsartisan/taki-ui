"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/v1/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/v1/ui/field"
import { Select, SelectItem } from "@/registry/v1/ui/select"

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export default function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email</FieldLabel>
            <Select
              selectedKey={field.value}
              onSelectionChange={(key) => field.onChange(key as string)}
            >
              <SelectItem id="m@example.com">m@example.com</SelectItem>
              <SelectItem id="m@google.com">m@google.com</SelectItem>
              <SelectItem id="m@support.com">m@support.com</SelectItem>
            </Select>
            <FieldDescription>
              You can manage email addresses in your{" "}
              <Link href="/examples/forms">email settings</Link>.
            </FieldDescription>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
