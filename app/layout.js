import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Dancing_Script, Roboto } from "next/font/google";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Script from "next/script";

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
});

export const metadata = {
    title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
    description:
        "Find the best vegan and vegetarian restaurants in Manchester. Explore meat-free dining options including vegan cafes, vegetarian bistros, and plant-based eateries across the city centre and Greater Manchester.",
    keywords:
        "vegan restaurants in Manchester, vegetarian restaurants in Manchester, best vegan food Manchester, best vegetarian food Manchester plant-based restaurants Manchester, vegetarian food Manchester",
    robots: "index, follow",
    language: "en",
    icons: {
        icon: "/favicon.ico",
    },
    // Open Graph metadata
    metadataBase: new URL("https://www.manchesterveganguide.com"),
    openGraph: {
        title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
        url: "https://www.manchesterveganguide.com",
        siteName: "Manchester Vegan Guide",
        type: "website",
        locale: "en_GB",
        images: [
            {
                url: "/images/MVG-logo.webp",
                width: 1024,
                height: 1024,
                alt: "Vegan and Vegetarian Restaurants in Manchester",
            },
        ],
    },
    // Twitter card metadata
    twitter: {
        card: "summary_large_image",
        title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
        image: "/images/MVG-logo.webp",
    },
    // Canonical URL (important for avoiding duplicate content issues)
    canonical: "https://www.manchesterveganguide.com",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics Script */}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-QY3SPPS6BJ"
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-QY3SPPS6BJ');
                        `,
                    }}
                />
                {/* CookieYes */}
                <Script
                    id="cookieyes"
                    strategy="afterInteractive"
                    src="https://cdn-cookieyes.com/client_data/d902f4716b82fc369a508f04/script.js"
                />
                {/* Adsense */}
                <meta
                    name="google-adsense-account"
                    content="ca-pub-8360130577730496"
                />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8360130577730496"
                    crossOrigin="anonymous"
                />
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body className={`${roboto.variable} ${dancingScript.variable}`}>
                <SiteNavbar />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
