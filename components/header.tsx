"use client"

import * as React from "react"
import { MenuMobile } from "@/components/menu-mobile"
import { SearchBar } from "@/components/search"
import { MenuDesktop } from "@/components/menu-desktop"

export function Header() {
  return (
    <header className="max-w-screen-2xl m-auto">
      <div className="flex justify-between flex-col px-4 py-4 m-auto my-0">
        <div className="flex justify-center h-8">LOGO</div>
        <div className="flex justify-between w-full gap-9">
          <MenuDesktop />
          <SearchBar />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
