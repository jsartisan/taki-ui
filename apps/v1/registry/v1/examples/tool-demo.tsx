import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/registry/new-york-v4/ai-elements/tool"

export default function ToolDemo() {
  const toolData = {
    type: "tool-search-web",
    state: "output-available" as const,
    input: {
      query: "latest AI developments",
      maxResults: 5,
    },
    output: {
      results: [
        {
          title: "New AI Model Released",
          url: "https://example.com/ai-news",
          snippet: "A groundbreaking AI model was announced today...",
        },
      ],
    },
    errorText: undefined,
  }

  return (
    <Tool defaultOpen>
      <ToolHeader
        title="Search Web"
        type={toolData.type}
        state={toolData.state}
      />
      <ToolContent>
        <ToolInput input={toolData.input} />
        <ToolOutput output={toolData.output} errorText={toolData.errorText} />
      </ToolContent>
    </Tool>
  )
}
