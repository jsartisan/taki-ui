import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/v1/ui/disclosure"

export default function DisclosureGroupDisabled() {
  return (
    <DisclosureGroup className="w-full max-w-xl">
      <Disclosure id="available">
        <DisclosureHeader>Available Feature</DisclosureHeader>
        <DisclosurePanel>
          This feature is available and can be accessed.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="disabled" isDisabled>
        <DisclosureHeader>Disabled Feature</DisclosureHeader>
        <DisclosurePanel>
          This content is not accessible because the disclosure is disabled.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="coming-soon" isDisabled>
        <DisclosureHeader>Coming Soon</DisclosureHeader>
        <DisclosurePanel>
          This feature will be available in a future update.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
