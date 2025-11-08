import { SearchField } from "@/registry/v1/ui/search-field"

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
