import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react"
import { findNeighbour } from "fumadocs-core/server"

import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsCopyPage } from "@/components/docs-copy-page"
import { DocsTableOfContents } from "@/components/docs-toc"
import { LinePattern } from "@/components/line-pattern"
import { badgeVariants } from "@/registry/v1/ui/badge"
import { LinkButton } from "@/registry/v1/ui/link-button"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@shadcn",
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }

  const doc = page.data
  // @ts-expect-error - revisit fumadocs types.
  const MDX = doc.body
  const neighbours = await findNeighbour(source.pageTree, page.url)

  // @ts-expect-error - revisit fumadocs types.
  const links = doc.links

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col border-x">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="bg-background mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 p-8 px-4 py-6 pb-8 text-neutral-800 md:px-8 lg:py-8 lg:pb-12 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage
                    // @ts-expect-error - revisit fumadocs types.
                    page={doc.content}
                    url={absoluteUrl(page.url)}
                  />
                  {neighbours.previous && (
                    <LinkButton
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      href={neighbours.previous.url}
                    >
                      <IconArrowLeft />
                      <span className="sr-only">Previous</span>
                    </LinkButton>
                  )}
                  {neighbours.next && (
                    <LinkButton
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      href={neighbours.next.url}
                    >
                      <span className="sr-only">Next</span>
                      <IconArrowRight />
                    </LinkButton>
                  )}
                </div>
              </div>
              {doc.description && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
            {links ? (
              <div className="flex items-center gap-2 pt-4">
                {links?.doc && (
                  <a
                    href={links.doc}
                    target="_blank"
                    rel="noreferrer"
                    className={badgeVariants({ variant: "secondary" })}
                  >
                    Docs <IconArrowUpRight />
                  </a>
                )}
                {links?.api && (
                  <a
                    href={links.api}
                    target="_blank"
                    rel="noreferrer"
                    className={badgeVariants({ variant: "secondary" })}
                  >
                    API Reference <IconArrowUpRight />
                  </a>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
        </div>
        <LinePattern className="h-6 border-t" />
        <div className="mx-auto hidden w-full grid-cols-2 items-center border-t px-4 sm:grid md:px-0">
          {neighbours.previous && (
            <LinkButton
              variant="ghost"
              size="sm"
              href={neighbours.previous.url}
              className="h-12 rounded-none shadow-none"
            >
              <IconArrowLeft /> {neighbours.previous.name}
            </LinkButton>
          )}
          {neighbours.next && (
            <LinkButton
              variant="ghost"
              size="sm"
              className="border-l-border h-12 rounded-none border-l shadow-none"
              href={neighbours.next.url}
            >
              {neighbours.next.name} <IconArrowRight />
            </LinkButton>
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        {/* @ts-expect-error - revisit fumadocs types. */}
        {doc.toc?.length ? (
          <div className="no-scrollbar overflow-y-auto px-8">
            {/* @ts-expect-error - revisit fumadocs types. */}
            <DocsTableOfContents toc={doc.toc} />
            <div className="h-12" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
