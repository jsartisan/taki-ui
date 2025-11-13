"use client"

import { useRouter } from "next/navigation"
import {
  I18nProvider,
  RouterProvider as RACRouterProvider,
} from "react-aria-components"

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <I18nProvider locale="en-US">
      <RACRouterProvider navigate={router.push}>{children}</RACRouterProvider>
    </I18nProvider>
  )
}
