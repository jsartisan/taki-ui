"use client"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from "@/registry/new-york/ai-elements/code-block"

export default function CodeBlockNoHeaderDemo() {
  const codeData = [
    {
      language: "jsx",
      filename: "MyComponent.jsx",
      code: `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`,
    },
  ]

  return (
    <CodeBlock data={codeData} defaultValue="jsx">
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
