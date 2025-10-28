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
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export function PresetSave() {
  return (
    <DialogTrigger>
      <Button variant="secondary">Save</Button>
      <Modal>
        <Dialog>
          <DialogHeader>
            <DialogTitle>Save preset</DialogTitle>
            <DialogDescription>
              This will save the current playground state as a preset which you
              can access later or share with others.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" autoFocus />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" slot="close">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}
