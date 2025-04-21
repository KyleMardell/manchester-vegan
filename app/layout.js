import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteNavbar from "@/components/SiteNavbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
    description:
        "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
    keywords:
        "vegan restaurants in Manchester, vegetarian restaurants in Manchester, vegan restaurants Manchester, vegetarian restaurants Manchester, Manchester vegan, Manchester vegetarian, plant-based Manchester",
    robots: "index, follow",
    language: "en",
    // // Open Graph metadata
    // openGraph: {
    //     title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
    //     description:
    //         "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
    //     url: "https://www.manchesterveganguide.com", // Update with your site URL
    //     type: "website",
    //     images: [
    //         {
    //             url: "/images/og-image.jpg", // Ensure this path is correct or use a URL for an image
    //             width: 1200,
    //             height: 630,
    //             alt: "Vegan and Vegetarian Restaurants in Manchester",
    //         },
    //     ],
    // },
    // // Twitter card metadata
    // twitter: {
    //     card: "summary_large_image", // Type of Twitter card
    //     title: "Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
    //     description:
    //         "Discover the best vegetarian and vegan restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
    //     image: "/images/og-image.jpg", // Update with your image URL
    // },
    // // Canonical URL (important for avoiding duplicate content issues)
    // canonical: "https://www.manchesterveganguide.com", // Ensure this URL points to your homepage
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <SiteNavbar />
                {children}
            </body>
        </html>
    );
}
