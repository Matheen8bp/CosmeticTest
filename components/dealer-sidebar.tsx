"use client"

import { Package, Sparkles, TrendingUp, ShoppingCart, Home, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dealer/dashboard",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "/dealer/inventory",
    icon: Package,
  },
  {
    title: "Sell Product",
    url: "/dealer/sell",
    icon: ShoppingCart,
  },
  {
    title: "Profit Tracker",
    url: "/dealer/profits",
    icon: TrendingUp,
  },
  {
    title: "Settings",
    url: "/dealer/settings",
    icon: Settings,
  },
]

export function DealerSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-pink-100">
      <SidebarHeader className="border-b border-pink-100 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">CosmetiCare</h2>
            <p className="text-xs text-gray-600">Dealer Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-pink-600 font-medium">Business</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="data-[active=true]:bg-pink-50 data-[active=true]:text-pink-700 data-[active=true]:border-r-2 data-[active=true]:border-pink-500"
                  >
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-pink-100">
        <Button
          variant="outline"
          className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
          asChild
        >
          <Link href="/login">Sign Out</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
