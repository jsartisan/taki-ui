"use client"

import { useState } from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Modal } from "@/registry/new-york-v4/ui/modal"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export default function DropdownMenuDialog() {
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>File Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
              New File...
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
              Share...
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Download</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogTrigger isOpen={showNewDialog} onOpenChange={setShowNewDialog}>
        <Modal>
          <Dialog className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New File</DialogTitle>
              <DialogDescription>
                Provide a name for your new file. Click create when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup className="pb-3">
              <Field>
                <FieldLabel htmlFor="filename">File Name</FieldLabel>
                <Input
                  id="filename"
                  name="filename"
                  placeholder="document.txt"
                />
              </Field>
            </FieldGroup>
            <div className="flex justify-end gap-2">
              <Button variant="outline" slot="close">
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </Dialog>
        </Modal>
      </DialogTrigger>
      <DialogTrigger isOpen={showShareDialog} onOpenChange={setShowShareDialog}>
        <Modal>
          <Dialog className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Share File</DialogTitle>
              <DialogDescription>
                Anyone with the link will be able to view this file.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup className="py-3">
              <Field>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="shadcn@vercel.com"
                  autoComplete="off"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Check out this file"
                />
              </Field>
            </FieldGroup>
            <div className="flex justify-end gap-2">
              <Button variant="outline" slot="close">
                Cancel
              </Button>
              <Button type="submit">Send Invite</Button>
            </div>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </>
  )
}
