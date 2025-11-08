import { SlashIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/v1/ui/breadcrumb"

export default function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink>Breadcrumb</BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  )
}
