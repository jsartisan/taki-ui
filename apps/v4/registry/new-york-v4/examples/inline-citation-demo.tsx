import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardCarousel,
  InlineCitationCardCarouselContent,
  InlineCitationCardCarouselControl,
  InlineCitationCardCarouselItem,
  InlineCitationCardTrigger,
  InlineCitationText,
} from "@/registry/new-york-v4/ai-elements/inline-citation"

export default function InlineCitationDemo() {
  const sources = [
    "https://react.dev",
    "https://developer.mozilla.org",
    "https://www.typescriptlang.org",
  ]

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm leading-relaxed">
        <InlineCitation>
          <InlineCitationText>
            React is a JavaScript library for building user interfaces
          </InlineCitationText>
          <InlineCitationCard>
            <InlineCitationCardTrigger sources={sources} />
            <InlineCitationCardBody>
              <InlineCitationCardCarousel>
                <InlineCitationCardCarouselContent>
                  <InlineCitationCardCarouselItem>
                    <div className="space-y-2 p-4">
                      <h4 className="text-sm font-semibold">
                        React Documentation
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        The official React documentation provides comprehensive
                        guides and API references.
                      </p>
                      <a
                        className="text-primary text-xs hover:underline"
                        href="https://react.dev"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Visit source →
                      </a>
                    </div>
                  </InlineCitationCardCarouselItem>
                  <InlineCitationCardCarouselItem>
                    <div className="space-y-2 p-4">
                      <h4 className="text-sm font-semibold">MDN Web Docs</h4>
                      <p className="text-muted-foreground text-xs">
                        Mozilla's comprehensive web development documentation.
                      </p>
                      <a
                        className="text-primary text-xs hover:underline"
                        href="https://developer.mozilla.org"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Visit source →
                      </a>
                    </div>
                  </InlineCitationCardCarouselItem>
                  <InlineCitationCardCarouselItem>
                    <div className="space-y-2 p-4">
                      <h4 className="text-sm font-semibold">TypeScript Docs</h4>
                      <p className="text-muted-foreground text-xs">
                        Official TypeScript documentation and tutorials.
                      </p>
                      <a
                        className="text-primary text-xs hover:underline"
                        href="https://www.typescriptlang.org"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Visit source →
                      </a>
                    </div>
                  </InlineCitationCardCarouselItem>
                </InlineCitationCardCarouselContent>
                <InlineCitationCardCarouselControl />
              </InlineCitationCardCarousel>
            </InlineCitationCardBody>
          </InlineCitationCard>
        </InlineCitation>
        , developed and maintained by Meta (formerly Facebook).
      </p>
    </div>
  )
}
