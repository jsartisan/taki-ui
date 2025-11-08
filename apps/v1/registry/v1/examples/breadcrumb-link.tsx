import {
  Breadcrumb,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/v1/ui/breadcrumb"

export default function BreadcrumbWithLink() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
