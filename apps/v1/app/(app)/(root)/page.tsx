import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { LinePattern } from "@/components/line-pattern"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { LinkButton } from "@/registry/v1/ui/link-button"

import { AICodingPlatform } from "../examples/ai/components/ai-coding-platform"

const title = "AI-Ready. Accessible. Composable."
const description =
  "A set of accessible, beautifully designed components powered by React Aria. AI-ready out of the box. Start here, then make it your own. Open Source. Open Code."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <LinePattern className="h-6 border-b">
        <div className="container-wrapper h-full"></div>
      </LinePattern>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <LinkButton href="/docs/installation" size="sm">
            Get Started
          </LinkButton>
          <LinkButton href="/docs/components" size="sm" variant="ghost">
            View Components
          </LinkButton>
        </PageActions>
      </PageHeader>
      <LinePattern className="h-6 border-t">
        <div className="container-wrapper h-full"></div>
      </LinePattern>
      <section className="border-t">
        <PageNav className="hidden md:flex">
          <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
          <ThemeSelector className="mr-4 hidden md:flex" />
        </PageNav>
      </section>

      <div className="border-t">
        <div className="container-wrapper flex-1">
          {/* <section className="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/new-york-v4/dashboard-01-light.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/new-york-v4/dashboard-01-dark.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="hidden dark:block"
              priority
            />
          </section> */}
          <section className="theme-container hidden md:block">
            <AICodingPlatform />
          </section>
        </div>
      </div>
    </div>
  )
}
