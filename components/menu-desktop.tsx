"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ui/mode-toggle"

const rules: { title: string; href: string; description: string }[] = [
  {
    title: "Primeiros passos",
    href: "/",
    description: "Resumo das regras.",
  },
  {
    title: "Tipos de Cards",
    href: "/",
    description: "Entenda os tipos de cards.",
  },
  {
    title: "Conjurar mágicas",
    href: "/",
    description: "Como conjurar mágicas.",
  },
  {
    title: "Partes do Card",
    href: "/",
    description: "Entendendo as partes do card e seus significados.",
  },
  {
    title: "Combate",
    href: "/",
    description: "Entenda uma das formas de vender o jogo. ",
  },
  {
    title: "Respostas e Pilha",
    href: "/",
    description: "Entenda como funciona as respostas e pilha.",
  },
  {
    title: "Habilidades",
    href: "/",
    description: "Entenda todas as habilidades de suas cartas.",
  },
  {
    title: "Ver tudo",
    href: "/",
    description: "",
  },
]

export function MenuDesktop() {
  return (
    <div className="hidden lg:flex gap-14 lg:w-full lg:justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Regras</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {rules.map((rule) => (
                  <ListItem
                    key={rule.title}
                    title={rule.title}
                    href={rule.href}
                  >
                    {rule.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Cartas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
