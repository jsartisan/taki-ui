import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Modal } from "@/registry/new-york-v4/ui/modal"

export function DialogDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DialogWithForm />
      <DialogScrollableContent />
      <DialogWithStickyFooter />
    </div>
  )
}

function DialogWithForm() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
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
                <Input id="username-1" name="username" defaultValue="@peduarte" />
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

function DialogScrollableContent() {
  return (
    <DialogTrigger>
      <Button variant="outline">Scrollable Content</Button>
      <Modal>
        <Dialog className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>
              This is a dialog with scrollable content.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
            <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

function DialogWithStickyFooter() {
  return (
    <DialogTrigger>
      <Button variant="outline">Sticky Footer</Button>
      <Modal>
        <Dialog className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>
              This is a dialog with scrollable content.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
            <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" slot="close">
              Close
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
