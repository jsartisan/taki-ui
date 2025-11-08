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

export default function CodeBlockDiffDemo() {
  const codeData = [
    {
      language: "javascript",
      filename: "utils.js",
      code: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity; // [!code --]
    const itemTotal = items[i].price * items[i].quantity; // [!code ++]
    total += itemTotal; // [!code ++]
  }
  return total;
}`,
    },
  ]

  return (
    <CodeBlock data={codeData} defaultValue="javascript">
      <CodeBlockHeader>
        <CodeBlockFilename value="javascript">
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
