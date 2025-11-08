import {
  TabPanel,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/v1/ui/tabs"

export default function TabsOrientation() {
  return (
    <Tabs defaultSelectedKey="profile" orientation="vertical">
      <TabsList aria-label="User settings">
        <TabsTrigger id="profile">Profile</TabsTrigger>
        <TabsTrigger id="security">Security</TabsTrigger>
        <TabsTrigger id="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabPanel id="profile">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-muted-foreground text-sm">
            Manage your profile information, avatar, and personal details.
          </p>
        </div>
      </TabPanel>
      <TabPanel id="security">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Security</h3>
          <p className="text-muted-foreground text-sm">
            Update your password, enable two-factor authentication, and manage
            security settings.
          </p>
        </div>
      </TabPanel>
      <TabPanel id="notifications">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-muted-foreground text-sm">
            Configure how you receive notifications and updates.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  )
}
