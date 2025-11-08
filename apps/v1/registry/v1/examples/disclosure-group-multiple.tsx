import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/v1/ui/disclosure"

export default function DisclosureGroupMultiple() {
  return (
    <DisclosureGroup
      allowsMultipleExpanded
      defaultExpandedKeys={["features", "pricing"]}
      className="w-full max-w-xl"
    >
      <Disclosure id="features">
        <DisclosureHeader>Features</DisclosureHeader>
        <DisclosurePanel>
          Our platform includes real-time collaboration, version control, and
          advanced analytics.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="pricing">
        <DisclosureHeader>Pricing</DisclosureHeader>
        <DisclosurePanel>
          Choose from our flexible plans: Starter ($9/mo), Pro ($29/mo), or
          Enterprise (custom pricing).
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="support">
        <DisclosureHeader>Support</DisclosureHeader>
        <DisclosurePanel>
          24/7 customer support via email, chat, and phone for all paid plans.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
