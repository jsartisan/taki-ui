"use client"

import * as React from "react"

import { Button } from "@/registry/v1/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/v1/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/v1/ui/field"
import { Input } from "@/registry/v1/ui/input"
import { Select, SelectItem } from "@/registry/v1/ui/select"
import { Textarea } from "@/registry/v1/ui/textarea"

export function CardsReportIssue() {
  const id = React.useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldGroup className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor={`area-${id}`}>Area</FieldLabel>
              <Select
                id={`area-${id}`}
                defaultSelectedKey="billing"
                placeholder="Select"
                className="w-full"
              >
                <SelectItem id="team">Team</SelectItem>
                <SelectItem id="billing">Billing</SelectItem>
                <SelectItem id="account">Account</SelectItem>
                <SelectItem id="deployments">Deployments</SelectItem>
                <SelectItem id="support">Support</SelectItem>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor={`security-level-${id}`}>
                Security Level
              </FieldLabel>
              <Select
                id={`security-level-${id}`}
                defaultSelectedKey="2"
                placeholder="Select level"
                className="w-full"
              >
                <SelectItem id="1">Severity 1 (Highest)</SelectItem>
                <SelectItem id="2">Severity 2</SelectItem>
                <SelectItem id="3">Severity 3</SelectItem>
                <SelectItem id="4">Severity 4 (Lowest)</SelectItem>
              </Select>
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor={`subject-${id}`}>Subject</FieldLabel>
            <Input id={`subject-${id}`} placeholder="I need help with..." />
          </Field>
          <Field>
            <FieldLabel htmlFor={`description-${id}`}>Description</FieldLabel>
            <Textarea
              id={`description-${id}`}
              placeholder="Please include all information relevant to your issue."
              className="min-h-24"
            />
          </Field>
          <Field orientation="horizontal" className="justify-end">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button size="sm">Submit</Button>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
