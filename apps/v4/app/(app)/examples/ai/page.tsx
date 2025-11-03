"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"

import { AICodingPlatform } from "./components/ai-coding-platform"

export default function AIPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="AI Coding Platform"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="AI Coding Platform"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col md:flex">
        <AICodingPlatform />
      </div>
    </>
  )
}
