import { Disclosure, DisclosureHeader, DisclosurePanel } from "../ui/disclosure"

export default function DisclosureDemo() {
  return (
    <Disclosure className="min-w-66">
      <DisclosureHeader>System Requirements</DisclosureHeader>
      <DisclosurePanel>Details about system requirements here.</DisclosurePanel>
    </Disclosure>
  )
}
