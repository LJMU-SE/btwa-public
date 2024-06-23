import Link from "next/link";
import Container from "./Container";

export default function NavBar() {
    return (
        <Container>
            <nav className="h-20 w-full flex justify-end items-center gap-[22px] font-medium">
                <div className="flex gap-5">
                    <Link href="/">Home</Link>
                    <Link href="/our-projects">Our Projects</Link>
                    <Link href="/about-us">The Team</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </div>
            </nav>
        </Container>
    );
}
