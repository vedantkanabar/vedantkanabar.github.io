import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
];


export function Navbar() {
    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? "text-white font-bold" : "text-gray-700 hover:text-gray-500";
    };

    return (
        <nav className="w-full bg-blue-500 dark:bg-red-500 shadow-md">
            <div className="w-full px-4">
                <div className="flex space-x-6 h-16 items-center">
                    {navItems.map((item: NavItem) => (
                        <NavLink
                            to={item.path}
                            className={getNavLinkClass}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}
