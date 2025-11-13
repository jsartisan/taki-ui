"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/registry/new-york/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/new-york/ui/field"
import { Textarea } from "@/registry/new-york/ui/textarea"

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

export default function TextareaForm() {
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
        name="bio"
        render={({ field, fieldState }) => {
          const textareaId = "textarea-form-bio"
          const descriptionId = `${textareaId}-description`
          const errorId = `${textareaId}-error`
          return (
            <Field data-invalid={fieldState.invalid} className="flex flex-col">
              <FieldLabel htmlFor={textareaId}>Bio</FieldLabel>
              <Textarea
                id={textareaId}
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                aria-invalid={fieldState.invalid}
                aria-describedby={
                  fieldState.invalid
                    ? `${descriptionId} ${errorId}`
                    : descriptionId
                }
                {...field}
              />
              <FieldDescription id={descriptionId}>
                You can <span>@mention</span> other users and organizations.
              </FieldDescription>
              {fieldState.invalid && (
                <FieldError id={errorId} errors={[fieldState.error]} />
              )}
            </Field>
          )
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
