import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Dancing_Script, Roboto } from "next/font/google";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

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
    metadataBase: new URL('https://www.manchesterveganguide.com'),
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
            <body className={`${roboto.variable} ${dancingScript.variable}`}>
                <SiteNavbar />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
