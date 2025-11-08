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

export default function CodeBlockFocusDemo() {
  const codeData = [
    {
      language: "javascript",
      filename: "utils.js",
      code: `function calculateDiscount(price, percentage) {
  const discount = price * (percentage / 100); // [!code focus]
  return price - discount;
}

// Example usage
const finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // 80`,
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
