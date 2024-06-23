import Container from "@/components/Container";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Container>
                <section id={"hero"} className="h-[calc(100dvh-80px)] flex flex-col">
                    <div className="flex-grow flex items-center justify-start">
                        <div className={"flex flex-col gap-10"}>
                            <h1 className="text-[40px] font-semibold">
                                LJMU
                                <br /> SOFTWARE ENGINEERING TEAM
                            </h1>
                            <Link
                                href="https://github.com/LJMU-SE"
                                target="_blank"
                                className="bg-black hover:bg-black/85 rounded-md px-6 py-2 text-white w-max flex items-center transition-all gap-3 group"
                            >
                                Find us on GitHub
                                <FaArrowRight className="inline ml-3 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </div>
                    <div className="h-20"></div>
                </section>
            </Container>
        </>
    );
}
