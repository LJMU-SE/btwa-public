import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Container } from "@/components/Containers";

export default function Home() {
    return (
        <>
            <div className="bg-primary relative z-30">
                <Container>
                    <section id={"hero"} className="h-[calc(100dvh-80px)] sticky flex flex-col ">
                        <div className="flex-grow flex items-center justify-start">
                            <div className={"flex flex-col gap-10"}>
                                <h1 className="text-[20px] lg:text-[40px] font-semibold">
                                    LJMU
                                    <br /> SOFTWARE ENGINEERING TEAM
                                </h1>
                                <Link
                                    href="https://github.com/LJMU-SE"
                                    target="_blank"
                                    className="bg-black hover:bg-black/85 rounded-md px-6 py-2 text-white w-max flex items-center transition-all gap-3 group font-semibold"
                                >
                                    Find us on GitHub
                                    <FaArrowRight className="inline ml-3 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                        </div>
                        <div className="h-20"></div>
                    </section>
                </Container>
            </div>

            {/* Container 1 */}
            <section id="our-projects" className="h-dvh bg-black text-white z-20 sticky block bottom-0 text-center md:text-left">
                <div className="h-full w-full flex">
                    <div className="w-full md:w-1/2 flex items-center">
                        <Container>
                            <h2 className="text-[36px] uppercase">Our Projects</h2>
                            <p className="text-[14px] mt-[15px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique diam eget ullamcorper pellentesque.
                                Pellentesque euismod in diam in hendrerit. Sed vehicula arcu vel dictum blandit.
                            </p>
                            <Link
                                href="#"
                                className="bg-white hover:bg-white/85 rounded-md px-6 py-2 text-black w-full md:w-max flex justify-center items-center transition-all gap-3 group md:float-left mt-[15px] font-semibold"
                            >
                                Learn More
                                <FaArrowRight className="inline ml-3 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </Container>
                    </div>
                    <img className="w-1/2 h-dvh object-cover hidden md:block" src={"/img/Landing-1.png"} />
                </div>
            </section>

            {/* Container 2 */}
            <section id="meet-the-team" className="h-dvh bg-primary sticky block bottom-0 z-10 text-center md:text-right">
                <div className="h-full w-full flex">
                    <img className="w-1/2 h-dvh object-cover hidden md:block" src={"/img/Landing-2.png"} />
                    <div className="w-full md:w-1/2 flex items-center">
                        <Container>
                            <h2 className="text-[36px] uppercase">Meet the Team</h2>
                            <p className="text-[14px] mt-[15px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique diam eget ullamcorper pellentesque.
                                Pellentesque euismod in diam in hendrerit. Sed vehicula arcu vel dictum blandit.
                            </p>
                            <Link
                                href="/about-us"
                                className="bg-black hover:bg-black/85 rounded-md px-6 py-2 text-white w-full md:w-max flex justify-center items-center transition-all gap-3 group md:float-right mt-[15px] font-semibold"
                            >
                                Learn More
                                <FaArrowRight className="inline ml-3 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    );
}
