import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="w-full fixed top-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto py-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Start
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/mieter" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Für Mieter
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/vermieter" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Für Vermieter
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/hausverwalter" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Für Hausverwalter
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/kontakt" className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                Kontakt
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}