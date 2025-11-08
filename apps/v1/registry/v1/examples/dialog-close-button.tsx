import { Button } from "@/registry/v1/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/v1/ui/dialog"
import { Input } from "@/registry/v1/ui/input"
import { Label } from "@/registry/v1/ui/label"
import { Modal } from "@/registry/v1/ui/modal"

export default function DialogCloseButton() {
  return (
    <DialogTrigger>
      <Button variant="outline">Share</Button>
      <Modal>
        <Dialog className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <div className="flex justify-start pt-4">
            <Button type="button" variant="secondary" slot="close">
              Close
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
