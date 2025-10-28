import { SearchField } from "@/registry/new-york-v4/ui/search-field"

export default function SearchFieldWithDescription() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <SearchField
        label="Search"
        description="Search for products by name or category."
        placeholder="Search..."
      />
    </div>
  )
}
