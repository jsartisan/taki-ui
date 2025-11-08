"use client"

import { Button } from "@/registry/v1/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/v1/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/v1/ui/field"
import { Switch } from "@/registry/v1/ui/switch"

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="necessary">Strictly Necessary</FieldLabel>
            <FieldDescription>
              These cookies are essential in order to use the website and use
              its features.
            </FieldDescription>
          </FieldContent>
          <Switch id="necessary" defaultChecked aria-label="Necessary" />
        </Field>
        <Field>
          <Button variant="outline">Save preferences</Button>
        </Field>
      </CardContent>
    </Card>
  )
}
