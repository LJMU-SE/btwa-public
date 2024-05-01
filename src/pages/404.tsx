import Layout from "@/components/PageLayout";
import Link from "next/link";

function NotFoundPage() {
    return (
        <Layout title="404 Not Found" description="The page or resource that you are looking for could not be found on our servers.">
            <div className="bg-white w-full flex-grow flex justify-center items-center flex-col gap-5 p-10" id={"error-container"}>
                <h1 className="text-5xl font-bold">OOPS!</h1>
                <p className="text-center">The page or resource that you are looking for could not be found on our servers.</p>
                <Link href="/" className="px-5 py-2 rounded-md bg-orange hover:bg-orange/80 transition-all text-white">
                    Go Home
                </Link>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
