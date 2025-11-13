"use client"

import { Button } from "@/registry/new-york/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Modal } from "@/registry/new-york/ui/modal"

export default function DialogAlert() {
  return (
    <DialogTrigger>
      <Button variant="outline">Delete Account</Button>
      <Modal isDismissable={false}>
        <Dialog role="alertdialog" className="w-[450px]">
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <Button variant="outline" onPress={close}>
                  Cancel
                </Button>
                <Button variant="destructive" onPress={close}>
                  Delete Account
                </Button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
