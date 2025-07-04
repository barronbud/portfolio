import { NavItem } from "./nav-item";
import { navItems } from "@/app/navigation";

export function NavList() {
    return (
        <ul className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, item]) => (
                <NavItem key={path} path={path} item={item} />
            ))}
        </ul>
    );
}
