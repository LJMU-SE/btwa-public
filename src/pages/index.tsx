import Layout from "@/components/PageLayout";

export default function Home() {
    return (
        <Layout title="Home">
            <div className="w-full h-full flex items-center justify-center p-10 flex-grow">
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
