"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import {
  Field,
  FieldError,
  FieldLegend,
  FieldSet,
} from "@/registry/new-york/ui/field"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export default function RadioGroupForm() {
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
        name="type"
        render={({ field, fieldState }) => {
          const legendId = "radio-group-form-type"
          return (
            <FieldSet
              data-invalid={fieldState.invalid}
              aria-labelledby={legendId}
              className="space-y-3"
            >
              <FieldLegend id={legendId} className="text-base">
                Notify me about...
              </FieldLegend>
              <RadioGroup
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value)
                  field.onBlur()
                }}
                aria-invalid={fieldState.invalid}
                className="flex flex-col gap-3"
              >
                <Field orientation="horizontal" className="items-center gap-3">
                  <Radio value="all" />
                  <span className="font-normal">All new messages</span>
                </Field>
                <Field orientation="horizontal" className="items-center gap-3">
                  <Radio value="mentions" />
                  <span className="font-normal">
                    Direct messages and mentions
                  </span>
                </Field>
                <Field orientation="horizontal" className="items-center gap-3">
                  <Radio value="none" />
                  <span className="font-normal">Nothing</span>
                </Field>
              </RadioGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
