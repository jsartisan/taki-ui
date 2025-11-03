"use client"

import { ImageIcon, SearchIcon } from "lucide-react"

import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtImage,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep,
} from "@/registry/new-york-v4/ai-elements/chain-of-thought"

export default function ChainOfThoughtDemo() {
  return (
    <div className="w-full">
      <ChainOfThought defaultOpen>
        <ChainOfThoughtHeader />
        <ChainOfThoughtContent>
          <ChainOfThoughtStep
            icon={SearchIcon}
            label="Searching for profiles for Hayden Bleasel"
            status="complete"
          >
            <ChainOfThoughtSearchResults>
              {[
                "https://www.x.com",
                "https://www.instagram.com",
                "https://www.github.com",
              ].map((website) => (
                <ChainOfThoughtSearchResult key={website}>
                  {new URL(website).hostname}
                </ChainOfThoughtSearchResult>
              ))}
            </ChainOfThoughtSearchResults>
          </ChainOfThoughtStep>

          <ChainOfThoughtStep
            icon={ImageIcon}
            label="Found the profile photo for Hayden Bleasel"
            status="complete"
          >
            <ChainOfThoughtImage caption="Hayden Bleasel's profile photo from x.com, showing a Ghibli-style man.">
              <img
                src="https://avatar.vercel.sh/haydenbleasel"
                alt="Example profile"
                className="aspect-square h-[150px] rounded-md border object-cover"
              />
            </ChainOfThoughtImage>
          </ChainOfThoughtStep>

          <ChainOfThoughtStep
            label="Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company."
            status="complete"
          />

          <ChainOfThoughtStep
            icon={SearchIcon}
            label="Searching for recent work..."
            status="active"
          >
            <ChainOfThoughtSearchResults>
              {["https://www.github.com", "https://www.dribbble.com"].map(
                (website) => (
                  <ChainOfThoughtSearchResult key={website}>
                    {new URL(website).hostname}
                  </ChainOfThoughtSearchResult>
                )
              )}
            </ChainOfThoughtSearchResults>
          </ChainOfThoughtStep>
        </ChainOfThoughtContent>
      </ChainOfThought>
    </div>
  )
}
