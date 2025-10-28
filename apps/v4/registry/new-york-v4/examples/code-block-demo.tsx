import {
  CodeBlock,
  CodeBlockCopyButton,
} from "@/registry/new-york-v4/ai-elements/code-block"

export default function CodeBlockDemo() {
  const code = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`

  return (
    <CodeBlock code={code} language="typescript">
      <CodeBlockCopyButton />
    </CodeBlock>
  )
}
