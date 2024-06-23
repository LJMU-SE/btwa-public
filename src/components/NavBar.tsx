"use client";

import Link from "next/link";
import { Container } from "./Containers";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Our Projects",
        href: "/our-projects",
    },
    {
        name: "The Team",
        href: "/about-us",
    },
    {
        name: "Contact Us",
        href: "/contact-us",
    },
];

export default function NavBar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    function openNav() {
        setShowMobileNav(true);
    }

    function closeNav() {
        setShowMobileNav(false);
    }

    return (
        <nav className="w-full bg-primary z-30 text-black">
            <Container>
                <div className="h-20 w-full flex justify-end items-center gap-[22px] font-medium">
                    <button onClick={openNav} className="block sm:hidden">
                        <BiMenuAltRight size={30} />
                    </button>
                    <div className="hidden sm:flex gap-5">
                        <Link href="/" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Home
                        </Link>
                        <Link href="/our-projects" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Our Projects
                        </Link>
                        <Link href="/about-us" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            The Team
                        </Link>
                        <Link href="/contact-us" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Container>

            <div
                id="mobile-nav"
                className={`fixed top-0 z-40 right-0 overflow-hidden whitespace-nowrap h-[100dvh] bg-white text-black transition-all ${
                    showMobileNav ? "w-[100vw]" : "w-0"
                }`}
                hidden={!showMobileNav}
            >
                <Container>
                    <div className="h-20 flex items-center justify-end">
                        <button onClick={closeNav} className="block sm:hidden">
                            <IoMdClose size={30} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-5 py-20">
                        <Link href="/" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Home
                        </Link>
                        <Link href="/our-projects" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Our Projects
                        </Link>
                        <Link href="/about-us" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            The Team
                        </Link>
                        <Link href="/contact-us" onClick={closeNav} className="text-black hover:text-black/50 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </Container>
            </div>
        </nav>
    );
}
