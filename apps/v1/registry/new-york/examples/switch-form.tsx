"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york/ui/field"
import { Switch } from "@/registry/new-york/ui/switch"

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

export default function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
        <div className="space-y-4">
          <Controller
            control={form.control}
            name="marketing_emails"
            render={({ field }) => {
              const switchId = "switch-form-marketing-emails"
              return (
                <Field
                  orientation="horizontal"
                  className="items-center justify-between rounded-lg border p-3 shadow-sm"
                >
                  <div className="space-y-0.5">
                    <FieldLabel htmlFor={switchId}>Marketing emails</FieldLabel>
                    <FieldDescription>
                      Receive emails about new products, features, and more.
                    </FieldDescription>
                  </div>
                  <Switch
                    id={switchId}
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                </Field>
              )
            }}
          />
          <Controller
            control={form.control}
            name="security_emails"
            render={({ field }) => {
              const switchId = "switch-form-security-emails"
              return (
                <Field
                  orientation="horizontal"
                  className="items-center justify-between rounded-lg border p-3 shadow-sm"
                >
                  <div className="space-y-0.5">
                    <FieldLabel htmlFor={switchId}>Security emails</FieldLabel>
                    <FieldDescription>
                      Receive emails about your account security.
                    </FieldDescription>
                  </div>
                  <Switch
                    id={switchId}
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    disabled
                    aria-readonly
                  />
                </Field>
              )
            }}
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
