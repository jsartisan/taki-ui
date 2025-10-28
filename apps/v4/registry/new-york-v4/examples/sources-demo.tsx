import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/new-york-v4/ai-elements/sources"

export default function SourcesDemo() {
  const sources = [
    {
      id: "1",
      title: "React Documentation",
      href: "https://react.dev",
    },
    {
      id: "2",
      title: "MDN Web Docs",
      href: "https://developer.mozilla.org",
    },
    {
      id: "3",
      title: "TypeScript Handbook",
      href: "https://www.typescriptlang.org/docs",
    },
  ]

  return (
    <div className="w-full max-w-2xl">
      <Sources>
        <SourcesTrigger count={sources.length} />
        <SourcesContent>
          {sources.map((source) => (
            <Source key={source.id} href={source.href} title={source.title} />
          ))}
        </SourcesContent>
      </Sources>
    </div>
  )
}
