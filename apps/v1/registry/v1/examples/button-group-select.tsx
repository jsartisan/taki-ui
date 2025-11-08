"use client"

import * as React from "react"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/v1/ui/button"
import { ButtonGroup } from "@/registry/v1/ui/button-group"
import { Input } from "@/registry/v1/ui/input"
import { Select, SelectItem } from "@/registry/v1/ui/select"

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
]

export default function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          selectedKey={currency}
          onSelectionChange={(key) => setCurrency(key as string)}
          className="min-w-24 font-mono"
        >
          {CURRENCIES.map((currency) => (
            <SelectItem key={currency.value} id={currency.value}>
              {currency.value}{" "}
              <span className="text-muted-foreground">{currency.label}</span>
            </SelectItem>
          ))}
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
