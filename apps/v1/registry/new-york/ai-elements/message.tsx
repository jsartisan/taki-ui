import type { ComponentProps, HTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  from: "user" | "assistant" | "system"
}

export const Message = ({ className, from, ...props }: MessageProps) => (
  <div
    className={cn(
      "group flex w-full flex-col items-end gap-2",
      from === "user" ? "is-user" : "is-assistant items-start",
      className
    )}
    {...props}
  />
)

const messageContentVariants = tv({
  base: "is-user:dark flex flex-col gap-2 overflow-hidden rounded-lg text-sm",
  variants: {
    variant: {
      contained: [
        "max-w-[80%] px-4 py-3",
        "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
        "group-[.is-assistant]:w-full group-[.is-assistant]:max-w-full",
      ],
      flat: [
        "group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
        "group-[.is-assistant]:w-full group-[.is-assistant]:max-w-full",
      ],
    },
  },
  defaultVariants: {
    variant: "contained",
  },
})

export type MessageContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof messageContentVariants>

export const MessageContent = ({
  children,
  className,
  variant,
  ...props
}: MessageContentProps) => (
  <div className={messageContentVariants({ variant, className })} {...props}>
    {children}
  </div>
)

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  src: string
  name?: string
}

export const MessageAvatar = ({
  src,
  name,
  className,
  ...props
}: MessageAvatarProps) => (
  <Avatar className={cn("ring-border size-8 ring-1", className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
  </Avatar>
)
