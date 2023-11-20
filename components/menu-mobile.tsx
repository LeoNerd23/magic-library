import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
import { ModeToggle } from "./ui/mode-toggle"

export function MenuMobile() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <AlignRight className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <ModeToggle />
          </SheetHeader>
          <div className="flex flex-col gap-16 h-full justify-center">
            <a className="text-4xl" href="">
              Home
            </a>
            <a className="text-4xl" href="">
              Ragras
            </a>
            <a className="text-4xl" href="">
              Cartas
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
