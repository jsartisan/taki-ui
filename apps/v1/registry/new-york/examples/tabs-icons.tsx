import { BellIcon, LockIcon, UserIcon } from "lucide-react"

import {
  TabPanel,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultSelectedKey="account">
      <TabsList aria-label="Settings">
        <TabsTrigger id="account">
          <UserIcon />
          Account
        </TabsTrigger>
        <TabsTrigger id="security">
          <LockIcon />
          Security
        </TabsTrigger>
        <TabsTrigger id="notifications">
          <BellIcon />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabPanel id="account">
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences.
        </p>
      </TabPanel>
      <TabPanel id="security">
        <p className="text-muted-foreground text-sm">
          Configure your security and privacy settings.
        </p>
      </TabPanel>
      <TabPanel id="notifications">
        <p className="text-muted-foreground text-sm">
          Choose how you want to receive notifications.
        </p>
      </TabPanel>
    </Tabs>
  )
}
