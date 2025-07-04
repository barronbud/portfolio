import { NavItem } from "./nav-item";
import { navItems } from "@/app/navigation";

export function NavList() {
    return (
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-0">
            {Object.entries(navItems).map(([path, item]) => (
                <NavItem key={path} path={path} item={item} />
            ))}
        </ul>
    );
}
