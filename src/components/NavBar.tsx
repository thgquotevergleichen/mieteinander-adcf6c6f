import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

const menuItems = [
  { path: "/", label: "Start" },
  { path: "/mieter", label: "Für Mieter" },
  { path: "/vermieter", label: "Für Vermieter" },
  { path: "/hausverwalter", label: "Für Hausverwalter" },
  { path: "/kontakt", label: "Kontakt" },
]

export const NavBar = () => {
  return (
    <div className="w-full fixed top-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto py-4">
        {/* Mobile Menu */}
        <div className="md:hidden flex justify-end">
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-4 py-2 text-lg hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-100/50 transition-colors duration-200 rounded-full px-6"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}