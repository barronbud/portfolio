import { Home, MoveLeft, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Back to Portfolio",
        url: "/demos",
        icon: MoveLeft,
        isInternal: false,
    },
    {
        title: "Home",
        url: "/demos/order-management-system",
        icon: Home,
        isInternal: true,
    },
    {
        title: "Orders",
        url: "/demos/order-management-system",
        icon: ShoppingCart,
        isInternal: true,
    },
    {
        title: "Products",
        url: "/demos/order-management-system/products",
        icon: Package,
        isInternal: true,
    },
    {
        title: "Customers",
        url: "/demos/order-management-system/customers",
        icon: Users,
        isInternal: true,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="none">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        {item.isInternal ? (
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        ) : (
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        )}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
