import Link from "next/link";

function Hero() {
    return (
        <section id={"hero"} className={"h-[30em] select-none"}>
            <div className={"w-full h-full bg-black/75 flex justify-center items-center p-10"}>
                <div className={"w-full flex flex-col gap-5 text-white max-w-[1000px] fade"}>
                    <h1 className={"text-2xl sm:text-3xl md:text-4xl font-black transition-all"}>
                        Liverpool John Moores University
                        <br />
                        Software Engineering Team
                    </h1>
                    <Link className={"px-5 py-2 rounded-md bg-orange hover:bg-orange/80 transition-all text-white font-semibold w-max"} href={"/about"}>
                        About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
