import { cn } from "@/lib/utils"

export function PageNav({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-wrapper scroll-mt-24", className)} {...props}>
      <div className="mx-0 flex w-full items-center justify-between gap-4 py-4">
        {children}
      </div>
    </div>
  )
}
