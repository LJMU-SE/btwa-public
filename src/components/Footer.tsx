import { Container } from "./Containers";
import info from "../../package.json";
import Link from "next/link";

import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const version = info.version;

export default function Footer() {
    return (
        <footer className="bg-black py-10 text-white">
            <Container>
                <div className={"flex flex-col items-center"}>
                    <div className="flex w-max lg:w-full flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start gap-5 lg:gap-0 mb-10">
                        <img src="/img/logo.png" alt="LJMU Software Engineering Team" className="w-20 h-20" />
                        <div className="flex w-full flex-grow flex-col items-start lg:items-end text-center lg:text-right">
                            <h2 className="text-[24px] lg:text-[21px] mb-2 w-full">Sitemap</h2>
                            <Link className="text-[16px] hover:opacity-80 transition-all w-full" href="/">
                                Home
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all w-full" href="/projects">
                                Our Projects
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all w-full" href="/about-us">
                                About Us
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all w-full" href="/contact-us">
                                Contact Us
                            </Link>
                        </div>

                        <div className="flex w-full flex-grow flex-col items-start lg:items-end  text-center lg:text-right">
                            <h2 className="text-[24px] lg:text-[21px] mb-2 w-full">Other Links</h2>
                            <Link className="text-[16px] hover:opacity-80 transition-all w-full" target="_blank" href="https://www.ljmu.ac.uk">
                                Our University
                            </Link>
                            <Link
                                className="text-[16px] hover:opacity-80 transition-all w-full"
                                target="_blank"
                                href="https://www.github.com/LJMU-SE/www.ljmu.dev"
                            >
                                Source Code
                            </Link>
                            <Link
                                className="text-[16px] hover:opacity-80 transition-all w-full"
                                target="_blank"
                                href="https://www.github.com/LJMU-SE"
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row gap-10 md:gap-0 justify-between items-center my-5">
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <Link href={"/legal/terms-and-conditions"} className="text-[12px] font-light hover:opacity-80 transition-all">
                                Terms and Conditions
                            </Link>
                            <Link href={"/legal/privacy-policy"} className="text-[12px] font-light hover:opacity-80 transition-all">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link target="_blank" href="https://instagram.com/LJMU" className="hover:opacity-60 transition-all">
                                <FaInstagram size={30} />
                            </Link>
                            <Link target="_blank" href="https://www.youtube.com/@ljmutv" className="hover:opacity-60 transition-all">
                                <FaYoutube size={30} />
                            </Link>
                            <Link target="_blank" href="https://github.com/LJMU-SE" className="hover:opacity-60 transition-all">
                                <FaGithub size={30} />
                            </Link>
                            <Link target="_blank" href="https://x.com/LJMU" className="hover:opacity-60 transition-all">
                                <BsTwitterX size={30} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5 text-center">
                        <p className="font-light text-[12px] opacity-50">
                            v{version}, © {new Date().getFullYear()} LJMU Software Engineering Team
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
