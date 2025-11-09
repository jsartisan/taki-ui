import { CopyIcon, DownloadIcon, FileCodeIcon } from "lucide-react"

import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactClose,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from "@/registry/new-york/ai-elements/artifact"

export default function ArtifactDemo() {
  return (
    <Artifact className="w-full max-w-2xl">
      <ArtifactHeader>
        <div className="space-y-1">
          <ArtifactTitle>React Component</ArtifactTitle>
          <ArtifactDescription>
            A simple counter component with increment and decrement buttons
          </ArtifactDescription>
        </div>
        <ArtifactActions>
          <ArtifactAction tooltip="Copy code" label="Copy">
            <CopyIcon className="size-4" />
          </ArtifactAction>
          <ArtifactAction tooltip="Download" label="Download">
            <DownloadIcon className="size-4" />
          </ArtifactAction>
          <ArtifactClose />
        </ArtifactActions>
      </ArtifactHeader>
      <ArtifactContent>
        <div className="flex items-center gap-2 text-sm">
          <FileCodeIcon className="text-muted-foreground size-4" />
          <code className="text-foreground">counter.tsx</code>
        </div>
        <pre className="text-muted-foreground mt-4 text-xs">
          {`export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}`}
        </pre>
      </ArtifactContent>
    </Artifact>
  )
}
