import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SiteNavbar from '@/components/SiteNavbar';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Vegan Bee | Vegan and Vegetarian Restaurants in Manchester",
    description:
        "Discover the best vegan and vegetarian restaurants in Manchester. Your complete guide to meat-free dining in Manchester, from plant-based cafes to vegetarian bistros.",
    keywords: "vegan restaurants in Manchester, vegetarian restaurants in Manchester, Manchester vegan, Manchester vegetarian, plant-based Manchester"
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
