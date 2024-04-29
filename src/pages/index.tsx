import Layout from "@/components/layout";

export default function Home() {
    return (
        <Layout title="Home">
            <div className="w-full h-[100dvh] flex items-center justify-center p-10">
                <p className="text-center">
                    This page is currently under construction. To view the university website,{" "}
                    <a className="underline" href="https://www.ljmu.ac.uk">
                        click here.
                    </a>
                </p>
            </div>
        </Layout>
    );
}
