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
                <div className={"flex flex-col"}>
                    <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start gap-5 lg:gap-0 mb-10">
                        <img src="/img/logo.png" alt="LJMU Software Engineering Team" className="w-20 h-20" />
                        <div className="flex flex-col items-start lg:items-end">
                            <h2 className="text-[20px] mb-2">Links Heading 1</h2>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 1
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 2
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 3
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 4
                            </Link>
                        </div>

                        <div className="flex flex-col items-start lg:items-end">
                            <h2 className="text-[20px] mb-2">Links Heading 2</h2>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 4
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 5
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 6
                            </Link>
                            <Link className="text-[16px] hover:opacity-80 transition-all" href="#">
                                Link 7
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center my-5">
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <Link href={"#"} className="text-[12px] font-light hover:opacity-80 transition-all">
                                Terms and Conditions
                            </Link>
                            <Link href={"#"} className="text-[12px] font-light hover:opacity-80 transition-all">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="flex items-center gap-5">
                            <FaInstagram size={30} />
                            <FaYoutube size={30} />
                            <FaGithub size={30} />
                            <BsTwitterX size={30} />
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
