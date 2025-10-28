import { SunDimIcon, SunIcon } from "lucide-react"

import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
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
import { Select, SelectItem } from "@/registry/new-york-v4/ui/select"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export function DisplaySettings() {
  return (
    <FieldSet>
      <FieldLegend>Display</FieldLegend>
      <FieldDescription>
        Configure display settings, brightness, refresh rate, and more.
      </FieldDescription>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="resolution">Resolution</FieldLabel>
            <FieldDescription>Select the display resolution.</FieldDescription>
          </FieldContent>
          <Select id="resolution" placeholder="Select" className="ml-auto">
            <SelectItem id="1920x1080">1920 x 1080</SelectItem>
            <SelectItem id="2560x1440">2560 x 1440</SelectItem>
            <SelectItem id="3840x2160">3840 x 2160</SelectItem>
            <SelectItem id="auto">Auto</SelectItem>
          </Select>
        </Field>
        <FieldSeparator />
        <Field orientation="responsive">
          <FieldContent>
            <FieldTitle>Brightness</FieldTitle>
            <FieldDescription>
              Adjust the display brightness level.
            </FieldDescription>
          </FieldContent>
          <div className="flex min-w-[150px] items-center gap-2">
            <SunDimIcon className="size-4 shrink-0" />
            <Slider
              id="brightness"
              defaultValue={[75]}
              max={100}
              step={1}
              aria-label="Brightness"
            />
            <SunIcon className="size-4 shrink-0" />
          </div>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="auto-brightness">
              Automatically Adjust Brightness
            </FieldLabel>
            <FieldDescription>
              Automatically adjust brightness based on ambient light.
            </FieldDescription>
          </FieldContent>
          <Checkbox id="auto-brightness" defaultChecked />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="true-tone">True Tone</FieldLabel>
            <FieldDescription>
              Automatically adjust colors to match ambient lighting.
            </FieldDescription>
          </FieldContent>
          <Switch id="true-tone" />
        </Field>
        <FieldSeparator />
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="refresh-rate">Refresh Rate</FieldLabel>
            <FieldDescription>
              Select the display refresh rate.
            </FieldDescription>
          </FieldContent>
          <Select
            id="refresh-rate"
            placeholder="Select"
            className="ml-auto min-w-[200px]"
          >
            <SelectItem id="60hz">60 Hz</SelectItem>
            <SelectItem id="120hz">120 Hz</SelectItem>
            <SelectItem id="144hz">144 Hz</SelectItem>
            <SelectItem id="240hz">240 Hz</SelectItem>
          </Select>
        </Field>
        <FieldSeparator />
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="tv-connection">
              When connected to TV
            </FieldLabel>
            <FieldDescription>
              Choose display behavior when connected to a TV.
            </FieldDescription>
          </FieldContent>
          <Select id="tv-connection" placeholder="Select" className="ml-auto">
            <SelectItem id="mirror">Mirror Display</SelectItem>
            <SelectItem id="extend">Extend Display</SelectItem>
            <SelectItem id="tv-only">TV Only</SelectItem>
            <SelectItem id="auto">Auto</SelectItem>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
