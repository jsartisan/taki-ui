"use client"

import * as React from "react"
import { CodeIcon, EyeIcon } from "lucide-react"
import { Key } from "react-aria-components"

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/registry/v1/ai-elements/code-block"
import {
  TabPanel,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/v1/ui/tabs"
import { Tree, TreeItem } from "@/registry/v1/ui/tree"

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

export function Preview() {
  const [tab, setTab] = React.useState("preview")
  const [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(
    new Set(["components", "app"])
  )

  return (
    <Tabs
      className="relative mr-4 mb-4 w-full overflow-hidden rounded-lg border"
      selectedKey={tab}
      onSelectionChange={setTab}
    >
      <div className="border-b px-2 py-1">
        <TabsList>
          <TabsTrigger id="preview">
            <EyeIcon className="size-4" />
          </TabsTrigger>
          <TabsTrigger id="code">
            <CodeIcon className="size-4" />
          </TabsTrigger>
        </TabsList>
      </div>
      <TabPanel
        id="preview"
        className="flex h-full w-full items-center justify-center text-2xl font-bold"
      >
        Hello World
      </TabPanel>
      <TabPanel id="code" className="h-full w-full">
        <div className="flex h-full w-full">
          <div className="h-full min-w-[200px]">
            <Tree
              aria-label="Files"
              className="w-full"
              defaultSelectedKeys={["todo-list"]}
              selectionMode="single"
              defaultExpandedKeys={["components", "app"]}
              expandedKeys={expandedKeys}
              onExpandedChange={setExpandedKeys}
            >
              <TreeItem id="app" title="app">
                <TreeItem id="globals" title="globals.css" />
                <TreeItem id="page" title="page.tsx" />
              </TreeItem>
              <TreeItem title="components">
                <TreeItem id="todo-input" title="todo-input.tsx" />
                <TreeItem id="todo-item" title="todo-item.tsx" />
                <TreeItem id="todo-list" title="todo-list.tsx" />
              </TreeItem>
              <TreeItem id="package" title="package.json" />
            </Tree>
          </div>
          <div className="h-full flex-1 border-l">
            <CodeBlock
              data={codeData}
              defaultValue="typescript"
              className="rounded-none border-none"
            >
              <CodeBlockHeader>
                <CodeBlockFilename value="typescript">
                  {codeData[0].filename}
                </CodeBlockFilename>
                <CodeBlockCopyButton />
              </CodeBlockHeader>
              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent language={item.language}>
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  )
}
