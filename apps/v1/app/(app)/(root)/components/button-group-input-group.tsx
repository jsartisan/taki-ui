"use client"

import * as React from "react"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { ButtonGroup } from "@/registry/new-york/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york/ui/input-group"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)
  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup className="flex-1">
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <TooltipTrigger>
              <InputGroupButton
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                data-active={voiceEnabled}
                className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                aria-pressed={voiceEnabled}
                size="icon-xs"
                aria-label="Voice Mode"
              >
                <AudioLinesIcon />
              </InputGroupButton>
              <Tooltip>Voice Mode</Tooltip>
            </TooltipTrigger>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
