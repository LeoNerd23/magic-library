import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" />
      <Button className="w-8 h-8 p-0" type="submit" variant="ghost">
        <Search />
      </Button>
    </div>
  )
}
