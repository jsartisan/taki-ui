import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/new-york-v4/ui/disclosure"

export default function DisclosureGroupDefaultExpanded() {
  return (
    <DisclosureGroup
      defaultExpandedKeys={["system"]}
      className="w-full max-w-xl"
    >
      <Disclosure id="system">
        <DisclosureHeader>System Requirements</DisclosureHeader>
        <DisclosurePanel>
          <ul className="list-disc space-y-1 pl-4">
            <li>Node.js 18 or higher</li>
            <li>4GB RAM minimum</li>
            <li>10GB available storage</li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="installation">
        <DisclosureHeader>Installation</DisclosureHeader>
        <DisclosurePanel>
          Run <code className="bg-muted rounded px-1 py-0.5">npm install</code>{" "}
          to install dependencies.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="configuration">
        <DisclosureHeader>Configuration</DisclosureHeader>
        <DisclosurePanel>
          Create a <code className="bg-muted rounded px-1 py-0.5">.env</code>{" "}
          file in the root directory.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
