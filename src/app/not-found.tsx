import React from "react";
import Link from "next/link";
import { Container } from "@/components/Containers";

export default function NotFoundPage() {
    return (
        <div className="h-[calc(100dvh-80px)] flex flex-col items-center justify-center">
            <Container>
                <div className="flex flex-col gap-10 items-center justify-center">
                    <h1 className="text-[20px] lg:text-[40px] font-semibold text-center">
                        404
                        <br /> Page Not Found
                    </h1>
                    <Link
                        href="/"
                        className="bg-black hover:bg-black/85 rounded-md px-6 py-2 text-white w-max flex items-center transition-all gap-3 group font-semibold"
                    >
                        Go back to Home
                    </Link>
                </div>
            </Container>

            <div className="w-full h-20"></div>
        </div>
    );
}
