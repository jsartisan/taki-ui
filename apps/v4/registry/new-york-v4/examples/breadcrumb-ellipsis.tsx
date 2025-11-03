import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb"

export default function BreadcrumbCollapsed() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbEllipsis />
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        <BreadcrumbSeparator />
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
