"use client"

import { Home, User, Briefcase, Mail, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetHeader, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    {
      title: "Home",
      href: "#",
      icon: Home,
    },
    {
      title: "About",
      href: "#about",
      icon: User,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: Briefcase,
    },
    {
      title: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-blue-600">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] p-0">
        <SheetHeader>
          <SheetTitle>My Portfolio</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          
          <nav className="flex-1 overflow-auto">
            <ul className="p-2 space-y-1">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4">
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nilson Nguyen</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
