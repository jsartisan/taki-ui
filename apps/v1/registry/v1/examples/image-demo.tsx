import { Image } from "@/registry/new-york-v4/ai-elements/image"

export default function ImageDemo() {
  // Example base64 image (1x1 transparent PNG)
  const base64Data =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm">
          Generated image placeholder:
        </p>
        <Image
          alt="AI Generated Placeholder"
          base64={base64Data}
          mediaType="image/png"
          className="bg-muted h-40 w-40"
        />
      </div>
    </div>
  )
}
