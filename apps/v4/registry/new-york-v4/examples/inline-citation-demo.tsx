import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselItem,
  InlineCitationCarouselNext,
  InlineCitationCarouselPrev,
  InlineCitationSource,
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
              <InlineCitationCarousel>
                <InlineCitationCarouselHeader>
                  <InlineCitationCarouselPrev />
                  <InlineCitationCarouselNext />
                  <InlineCitationCarouselIndex />
                </InlineCitationCarouselHeader>
                <InlineCitationCarouselContent>
                  <InlineCitationCarouselItem>
                    <InlineCitationSource
                      title="React Documentation"
                      url="https://react.dev"
                      description="The official React documentation provides comprehensive guides and API references for building user interfaces."
                    />
                  </InlineCitationCarouselItem>
                  <InlineCitationCarouselItem>
                    <InlineCitationSource
                      title="MDN Web Docs"
                      url="https://developer.mozilla.org"
                      description="Mozilla's comprehensive web development documentation covering HTML, CSS, JavaScript, and Web APIs."
                    />
                  </InlineCitationCarouselItem>
                  <InlineCitationCarouselItem>
                    <InlineCitationSource
                      title="TypeScript Docs"
                      url="https://www.typescriptlang.org"
                      description="Official TypeScript documentation and tutorials for learning typed JavaScript."
                    />
                  </InlineCitationCarouselItem>
                </InlineCitationCarouselContent>
              </InlineCitationCarousel>
            </InlineCitationCardBody>
          </InlineCitationCard>
        </InlineCitation>
        , developed and maintained by Meta (formerly Facebook).
      </p>
    </div>
  )
}
