"use client"

export * from "@/registry/v1/lib/utils"

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
