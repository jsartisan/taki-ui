import {
  TabPanel,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/v1/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultSelectedKey="general">
      <TabsList aria-label="Settings">
        <TabsTrigger id="general">General</TabsTrigger>
        <TabsTrigger id="billing" isDisabled>
          Billing
        </TabsTrigger>
        <TabsTrigger id="team">Team</TabsTrigger>
      </TabsList>
      <TabPanel id="general">
        <p className="text-muted-foreground text-sm">
          General settings and preferences.
        </p>
      </TabPanel>
      <TabPanel id="billing">
        <p className="text-muted-foreground text-sm">
          Billing information and subscription details.
        </p>
      </TabPanel>
      <TabPanel id="team">
        <p className="text-muted-foreground text-sm">
          Manage your team members and their permissions.
        </p>
      </TabPanel>
    </Tabs>
  )
}
