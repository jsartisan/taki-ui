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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/new-york/ui/input-otp"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export default function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Controller
        control={form.control}
        name="pin"
        render={({ field, fieldState }) => {
          const baseId = "input-otp-form-pin"
          const descriptionId = `${baseId}-description`
          const errorId = `${baseId}-error`
          return (
            <Field data-invalid={fieldState.invalid} className="flex flex-col">
              <FieldLabel htmlFor={baseId}>One-Time Password</FieldLabel>
              <InputOTP
                id={baseId}
                maxLength={6}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                aria-invalid={fieldState.invalid}
                aria-describedby={
                  fieldState.invalid
                    ? `${descriptionId} ${errorId}`
                    : descriptionId
                }
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription id={descriptionId}>
                Please enter the one-time password sent to your phone.
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
