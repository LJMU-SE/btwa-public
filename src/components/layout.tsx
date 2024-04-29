// Import the Poppins font from Google Fonts and apply it to the layout component.
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
}

function Layout({ children, title, description, image }: LayoutProps) {
    const pageTitle = title ? `${title} | LJMU SE Team` : "LJMU Software Engineering Team";

    const metaDescription = description || "No Description Provided";
    const metaImage = image || "https://www.ljmu.dev/img/metadata/og-large.png";

    const router = useRouter();
    const url = `https://www.ljmu.dev${router.asPath}`;
    return (
        <main className={poppins.variable}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content={pageTitle} />
                <meta itemProp="description" content={metaDescription} />

                <meta itemProp="image" content={metaImage} />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImage} />
                <link rel="icon" type="image/webp" href="/img/icons/light.webp" media="(prefers-color-scheme: light)" />
                <link rel="icon" type="image/webp" href="/img/icons/dark.webp" media="(prefers-color-scheme: dark)" />
            </Head>
            {children}
        </main>
    );
}

export default Layout;
