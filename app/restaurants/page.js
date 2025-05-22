import RestaurantCard from "@/components/RestaurantCard";
import data from "@/data/restaurants.json";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./RestaurantsPage.module.css";

export const metadata = {
    title: "Best Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
    description:
        "Discover the top vegan and vegetarian restaurants in Manchester with Manchester Vegan Guide. Explore 100% vegan spots, vegetarian cafés, street food, and plant-based dining across the city centre and Greater Manchester. Your go-to guide for the best meat-free food in Manchester.",
    keywords:
        "vegan restaurants Manchester, vegetarian restaurants Manchester, best vegan food Manchester, plant-based restaurants Manchester, meat-free dining Manchester, vegan cafes Manchester, vegetarian food Manchester, Manchester vegan guide, vegan Chinese food Manchester, vegan street food Manchester, vegan pubs Manchester, vegan bistro Manchester, vegan brunch Manchester, healthy vegan food Manchester, Greater Manchester vegan restaurants",

    openGraph: {
        title: "Best Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Explore Manchester's top vegan and vegetarian dining spots. Find cafés, pubs, bistros, and plant-based restaurants with our curated guide.",
        url: "https://www.manchesterveganguide.com/restaurants",
        siteName: "Manchester Vegan Guide",
        images: [
            {
                url: "/images/MVG-logo.webp",
                width: 1200,
                height: 630,
                alt: "Vegan and vegetarian restaurant in Manchester set and ready for guests",
            },
        ],
        type: "website",
        locale: "en_GB",
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Vegan and Vegetarian Restaurants in Manchester",
        description:
            "Find the best vegan and vegetarian food in Manchester. Your complete guide to meat-free dining across the city.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function Restaurants() {
    return (
        <Container fluid="lg">
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/pages/restaurants.webp"
                        alt="An empty restaurant, set and ready for service."
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        Vegan and Vegetarian Restaurants in Manchester
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <p>
                        Welcome to the ultimate Manchester vegan food guide—your
                        go-to directory for the best vegan and vegetarian
                        restaurants across the city. <br />
                        <br />
                        Whether you&apos;re craving a hearty vegan pub menu,
                        vegetarian Chinese food packed with flavour, or a
                        stylish plant-based bistro, you&apos;ll find it all here in
                        one place. <br />
                        <br />
                        This complete list of the 25+ meat-free restaurants in
                        Manchester showcases everything from hidden gems and
                        street food stalls to well-known vegan hotspots. <br />
                        <br />
                        Browse all listings, discover new favourites, and
                        explore the ever-growing world of plant-based dining in
                        Manchester. <br />
                        <br />
                        Whether you&apos;re local or just visiting, this guide makes
                        it easy to eat well and meat-free.
                    </p>
                </Col>
            </Row>
            <Row>
                {[...data]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((restaurant) => (
                        <Col xs={12} md={6} xl={4} key={restaurant.name}>
                            <RestaurantCard
                                name={restaurant.name}
                                slug={restaurant.slug}
                                restType={restaurant.type}
                                location={restaurant.location}
                                mapembed={restaurant.mapembed}
                                cuisine={restaurant.cuisine}
                            />
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}
