export const assistantMessage = `In Next.js (App Router / React 19 world):

### **Server Component**

* Runs on the server.
* Can directly talk to DB, fetch, read files, read secrets.
* Not shipped to the browser.
* No browser APIs (no \`window\`, no \`localStorage\`).
* Default in Next.js.

### **Client Component**

* Runs in the browser + can hydrate.
* Can use \`useState\`, \`useEffect\`, DOM events, browser APIs.
* Must include \`"use client"\` at the top.

---

## Server Component example

\`\`\`tsx
// app/page.tsx  (this is a server component by default)

import { db } from "@/lib/db" // or direct fetch

export default async function Page() {
  const products = await db.product.findMany()

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  )
}
\`\`\`

> this code never hits the user's browser. DB query stays on the server.

---

## Client Component example

\`\`\`tsx
"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

### usage in page:

\`\`\`tsx
// app/page.tsx
import Counter from "./Counter"

export default function Page() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  )
}
\`\`\`

---

### mental model:

| feature                                  | server component | client component   |
| ---------------------------------------- | ---------------- | ------------------ |
| default?                                 | yes              | no                 |
| DB / backend access                      | ✔️               | ❌                  |
| size shipped to browser                  | 0 KB             | yes hydrate bundle |
| can use hooks? (\`useState\`, \`useEffect\`) | ❌                | ✔️                 |
| can access browser APIs                  | ❌                | ✔️                 |

---

### the "good rule"

If no interaction → keep as server component.
Only mark \`"use client"\` when you need interactivity.
`
