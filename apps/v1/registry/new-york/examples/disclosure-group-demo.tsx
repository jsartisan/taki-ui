import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/new-york/ui/disclosure"

export default function DisclosureGroupDemo() {
  return (
    <DisclosureGroup className="w-full max-w-xl">
      <Disclosure id="personal">
        <DisclosureHeader>Personal Information</DisclosureHeader>
        <DisclosurePanel>
          Enter your personal details including name, email, and phone number.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureHeader>Billing Address</DisclosureHeader>
        <DisclosurePanel>
          Provide your billing address for payment processing.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="shipping">
        <DisclosureHeader>Shipping Information</DisclosureHeader>
        <DisclosurePanel>
          Enter the address where you'd like your order delivered.
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
