import { Button } from "@/registry/new-york/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Modal } from "@/registry/new-york/ui/modal"

export default function DialogDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Modal>
        <Dialog className="sm:max-w-[425px]">
          <form method="dialog" className="space-y-4">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" slot="close">
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
