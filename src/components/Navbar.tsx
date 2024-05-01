import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

interface NavLinkProps {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}

function NavLink({ href, onClick, children }: NavLinkProps) {
    return (
        <Link href={href} onClick={onClick} className="py-2 px-5 block md:inline-block text-white hover:text-orange transition-all whitespace-nowrap">
            {children}
        </Link>
    );
}

interface NavBarProps {}

function NavBar({}: NavBarProps) {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <div>
            <button onClick={toggleOpen} className={"absolute md:hidden text-black z-50 top-0 left-0 flex mx-5 items-center w-16 h-16"}>
                <FiMenu color={"white"} size={20} />
            </button>
            <nav className={`${open ? "w-full" : "w-0"} fixed top-0 md:block overflow-hidden transition-all h-[100dvh] md:h-16 md:w-full bg-black`}>
                <div className="mt-16 md:mt-0 h-full flex flex-col md:flex-row md:justify-between md:items-center">
                    <Link href="/">
                        <img src="/img/logos/white.webp" alt="LJMU SE Team Logo" className="hidden md:block w-10 h-10 mx-10" />
                    </Link>
                    <div className="md:mx-10">
                        <NavLink onClick={toggleOpen} href={"/"}>
                            Home
                        </NavLink>
                        <NavLink onClick={toggleOpen} href={"/about"}>
                            About Us
                        </NavLink>
                        <NavLink onClick={toggleOpen} href={"/projects"}>
                            Our Projects
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
