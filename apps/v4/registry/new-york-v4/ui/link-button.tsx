"use client"

import {
  composeRenderProps,
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"

import { buttonVariants } from "./button"

export interface LinButtonProps
  extends RACLinkProps,
    VariantProps<typeof buttonVariants> {}

export function LinkButton(props: LinButtonProps) {
  return (
    <RACLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        buttonVariants({ ...renderProps, className, variant: props.variant })
      )}
    />
  )
}
