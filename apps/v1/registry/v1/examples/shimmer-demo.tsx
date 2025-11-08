import { Shimmer } from "@/registry/v1/ai-elements/shimmer"

export default function ShimmerDemo() {
  return (
    <div className="space-y-4">
      <Shimmer as="h2" className="text-2xl font-bold">
        Loading content...
      </Shimmer>
      <Shimmer as="p">
        This text has a shimmer effect while content is being generated.
      </Shimmer>
    </div>
  )
}
