import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const kodchasan = Kodchasan({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-kodchasan",
    weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "LJMU Software Engineering Team",
    description: "LJMU Software Engineering Team",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${kodchasan.className} bg-primary`}>
                <ToastContainer stacked position="bottom-right" className={"select-none"} />
                <NavBar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
