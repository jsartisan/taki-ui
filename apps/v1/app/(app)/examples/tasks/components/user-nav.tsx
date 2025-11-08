import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/v1/ui/avatar"
import { Button } from "@/registry/v1/ui/button"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/v1/ui/menu"

export function UserNav() {
  return (
    <MenuTrigger>
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Button>
      <Menu className="w-56" placement="bottom end">
        <MenuSection>
          <div className="flex flex-col space-y-1 px-2 py-1.5">
            <p className="text-sm leading-none font-medium">shadcn</p>
            <p className="text-muted-foreground text-xs leading-none">
              m@example.com
            </p>
          </div>
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuItem onAction={() => console.log("Profile")}>
            Profile
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⇧⌘P
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("Billing")}>
            Billing
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘B
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("Settings")}>
            Settings
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              ⌘S
            </span>
          </MenuItem>
          <MenuItem onAction={() => console.log("New Team")}>New Team</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuItem onAction={() => console.log("Log out")}>
          Log out
          <span className="text-muted-foreground ml-auto text-xs tracking-widest">
            ⇧⌘Q
          </span>
        </MenuItem>
      </Menu>
    </MenuTrigger>
  )
}
