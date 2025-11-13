"use client"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/registry/new-york/ai-elements/code-block"

export default function CodeBlockHighlightDemo() {
  const codeData = [
    {
      language: "jsx",
      filename: "MyComponent.jsx",
      code: `function MyComponent(props) { // [!code highlight]
  return (
    <div>
      <h1>Hello, {props.name}!</h1> // [!code highlight]
      <p>This is an example React component.</p>
    </div>
  );
}`,
    },
  ]

  return (
    <CodeBlock data={codeData} defaultValue="jsx">
      <CodeBlockHeader>
        <CodeBlockFilename value="jsx">
          {codeData[0].filename}
        </CodeBlockFilename>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as any}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  )
}
