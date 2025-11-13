import { Button } from "@/registry/new-york/ui/button"
import { Spinner } from "@/registry/new-york/ui/spinner"

export default function ButtonLoading() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  )
}
