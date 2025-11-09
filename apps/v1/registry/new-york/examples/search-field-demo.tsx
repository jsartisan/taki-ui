import { SearchField } from "@/registry/new-york/ui/search-field"

export default function SearchFieldDemo() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <SearchField label="Search" placeholder="Search products..." />
    </div>
  )
}
