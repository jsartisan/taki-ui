"use client"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/registry/v1/ai-elements/code-block"

export default function CodeBlockDemo() {
  const codeData = [
    {
      language: "typescript",
      filename: "greet.ts",
      code: `function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`,
    },
  ]

  return (
    <CodeBlock data={codeData} defaultValue="typescript">
      <CodeBlockHeader>
        <CodeBlockFilename value="typescript">
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
