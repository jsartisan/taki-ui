"use client"

import * as React from "react"
import {
  ModalOverlay,
  DialogTrigger as RACDialogTrigger,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"

import { Modal } from "./modal"

function AlertDialog({
  children,
  ...props
}: React.ComponentProps<typeof RACDialogTrigger>) {
  return <RACDialogTrigger {...props}>{children}</RACDialogTrigger>
}

function AlertDialogPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof ModalOverlay>) {
  return (
    <ModalOverlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[entering]:animate-in data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[entering]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog>) {
  return (
    <Modal
      data-slot="alert-dialog-content"
      className={cn(className)}
      {...props}
    >
      <Dialog className="grid w-full max-w-[calc(100%-2rem)] gap-4 sm:max-w-lg">
        {children}
      </Dialog>
    </Modal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof DialogHeader>) {
  return (
    <DialogHeader
      data-slot="alert-dialog-header"
      className={className}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  return (
    <DialogTitle
      data-slot="alert-dialog-title"
      className={className}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  return (
    <DialogDescription
      data-slot="alert-dialog-description"
      className={className}
      {...props}
    />
  )
}

function AlertDialogAction({ ...props }: React.ComponentProps<typeof Button>) {
  return <Button {...props} />
}

function AlertDialogCancel({ ...props }: React.ComponentProps<typeof Button>) {
  return <Button variant="outline" slot="close" {...props} />
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
