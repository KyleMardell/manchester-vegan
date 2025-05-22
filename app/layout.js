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
        "vegan restaurants Manchester, vegetarian restaurants Manchester, plant-based food Manchester, vegan cafes Manchester, vegetarian cafes Manchester, meat-free restaurants Manchester, vegan food guide Manchester, vegan dining Manchester, plant-based cafes Manchester, Manchester vegan restaurants, best vegan Manchester, healthy vegan restaurants Manchester, vegan bistro Manchester",
    robots: "index, follow",
    language: "en",
    // Open Graph metadata
    metadataBase: new URL("https://www.manchesterveganguide.com"),
    openGraph: {
        title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
        url: "https://www.manchesterveganguide.com", // Update with your site URL
        type: "website",
        images: [
            {
                url: "/images/MVG-logo.webp", // Ensure this path is correct or use a URL for an image
                width: 1200,
                height: 630,
                alt: "Vegan and Vegetarian Restaurants in Manchester",
            },
        ],
    },
    // Twitter card metadata
    twitter: {
        card: "summary_large_image", // Type of Twitter card
        title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
        image: "/images/MVG-logo.webp", // Update with your image URL
    },
    // Canonical URL (important for avoiding duplicate content issues)
    canonical: "https://www.manchesterveganguide.com", // Ensure this URL points to your homepage
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm-head" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-59ZJT4K2');
                    `}
                </Script>
            </head>
            <body className={`${roboto.variable} ${dancingScript.variable}`}>
                 {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-59ZJT4K2"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <SiteNavbar />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
