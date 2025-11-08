"use client"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/registry/new-york-v4/ai-elements/code-block"

export default function CodeBlockNoSyntaxDemo() {
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
      <CodeBlockHeader>
        <CodeBlockFilename value="jsx">
          {codeData[0].filename}
        </CodeBlockFilename>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent
              language={item.language as any}
              syntaxHighlighting={false}
            >
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  )
}
