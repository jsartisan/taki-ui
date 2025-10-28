import {
  CopyIcon,
  RefreshCwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Action, Actions } from "@/registry/new-york-v4/ai-elements/actions"

export default function ActionsDemo() {
  return (
    <Actions>
      <Action tooltip="Copy" label="Copy">
        <CopyIcon className="size-4" />
      </Action>
      <Action tooltip="Like" label="Like">
        <ThumbsUpIcon className="size-4" />
      </Action>
      <Action tooltip="Dislike" label="Dislike">
        <ThumbsDownIcon className="size-4" />
      </Action>
      <Action tooltip="Regenerate" label="Regenerate">
        <RefreshCwIcon className="size-4" />
      </Action>
    </Actions>
  )
}
