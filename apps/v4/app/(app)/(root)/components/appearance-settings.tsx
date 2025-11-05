"use client"

import { IconMinus, IconPlus } from "@tabler/icons-react"
import { NumberField } from "react-aria-components"

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Radio, RadioGroup } from "@/registry/new-york-v4/ui/radio-group"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export function AppearanceSettings() {
  return (
    <FieldSet>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Compute Environment</FieldLegend>
          <FieldDescription>
            Select the compute environment for your cluster.
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <label
                  htmlFor="kubernetes-r2h"
                  className="flex items-start gap-2"
                >
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s configured cluster. This is the
                      default.
                    </FieldDescription>
                  </FieldContent>
                  <Radio value="kubernetes" id="kubernetes-r2h" />
                </label>
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <label htmlFor="vm-z4k" className="flex items-start gap-2">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a VM configured cluster to run workloads. (Coming
                      soon)
                    </FieldDescription>
                  </FieldContent>
                  <Radio value="vm" id="vm-z4k" />
                </label>
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
        {/* <FieldSeparator /> */}
        {/* <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Accent</FieldTitle>
            <FieldDescription>Select the accent color.</FieldDescription>
          </FieldContent>
          <FieldSet aria-label="Accent">
            <RadioGroup
              className="flex flex-wrap gap-2"
              value={activeTheme}
              onChange={setActiveTheme}
            >
              <div className="flex flex-wrap gap-2">
                {accents.map((accent) => (
                  <RACRadio
                    key={accent.value}
                    id={accent.value}
                    value={accent.value}
                    aria-label={accent.name}
                    data-theme={accent.value}
                    className="group flex size-6 items-center justify-center rounded-full data-[theme=amber]:bg-amber-600 data-[theme=blue]:bg-blue-700 data-[theme=green]:bg-green-600 data-[theme=rose]:bg-rose-600"
                  >
                    <CheckIcon className="hidden size-4 stroke-white group-data-[selected=true]:block" />
                  </RACRadio>
                ))}
              </div>
            </RadioGroup>
          </FieldSet>
        </Field> */}
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="number-of-gpus-f6l">Number of GPUs</FieldLabel>
            <FieldDescription>You can add more later.</FieldDescription>
          </FieldContent>
          <NumberField>
            <ButtonGroup>
              <Input
                id="number-of-gpus-f6l"
                placeholder="8"
                size={3}
                className="h-8 !w-14 font-mono"
                maxLength={3}
              />
              <Button
                variant="outline"
                size="icon-sm"
                type="button"
                aria-label="Decrement"
                slot="decrement"
              >
                <IconMinus />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                type="button"
                aria-label="Increment"
                slot="increment"
              >
                <IconPlus />
              </Button>
            </ButtonGroup>
          </NumberField>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="tinting">Wallpaper Tinting</FieldLabel>
            <FieldDescription>
              Allow the wallpaper to be tinted.
            </FieldDescription>
          </FieldContent>
          <Switch defaultSelected>Wallpaper Tinting</Switch>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
