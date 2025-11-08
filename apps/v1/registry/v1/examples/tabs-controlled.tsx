"use client"

import { useState } from "react"

import { Button } from "@/registry/v1/ui/button"
import {
  TabPanel,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/v1/ui/tabs"

export default function TabsControlled() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onPress={() => setSelectedTab("overview")}
        >
          Go to Overview
        </Button>
        <Button
          variant="outline"
          size="sm"
          onPress={() => setSelectedTab("analytics")}
        >
          Go to Analytics
        </Button>
      </div>
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
      >
        <TabsList aria-label="Dashboard sections">
          <TabsTrigger id="overview">Overview</TabsTrigger>
          <TabsTrigger id="analytics">Analytics</TabsTrigger>
          <TabsTrigger id="reports">Reports</TabsTrigger>
        </TabsList>
        <TabPanel id="overview">
          <p className="text-muted-foreground text-sm">
            Overview of your dashboard with key metrics.
          </p>
        </TabPanel>
        <TabPanel id="analytics">
          <p className="text-muted-foreground text-sm">
            Detailed analytics and insights.
          </p>
        </TabPanel>
        <TabPanel id="reports">
          <p className="text-muted-foreground text-sm">
            Generate and view reports.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  )
}
