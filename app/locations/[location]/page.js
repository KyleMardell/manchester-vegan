import data from "@/data/restaurants.json";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import RestaurantCard from "@/components/RestaurantCard";
import Image from "next/image";
import styles from "./LocationPage.module.css";
import BackButton from "@/components/BackButton";

export async function generateMetadata({ params }) {
    const { location } = await params;

    // You may want to convert the slug back to the original label, but here's a readable fallback:
    const readableLocation = location
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        title: `Vegan and Vegetarian Restaurants in ${readableLocation} | Manchester Vegan Guide`,
        description: `Discover the best vegan and vegetarian restaurants in ${readableLocation}, Manchester. Enjoy top plant-based cafés, vegetarian-friendly eateries, and meat-free dining options in ${readableLocation}.`,
        keywords: `vegan restaurants ${readableLocation}, vegetarian restaurants ${readableLocation}, plant-based food ${readableLocation}, vegan cafes ${readableLocation}, vegetarian dining ${readableLocation}, Manchester vegan guide, vegan food ${readableLocation}, vegetarian food ${readableLocation}`,
        metadataBase: new URL("https://www.manchesterveganguide.com"),
        openGraph: {
            title: `Vegan and Vegetarian Restaurants in ${readableLocation} | Manchester Vegan Guide`,
            description: `Discover the best vegan and vegetarian restaurants in ${readableLocation}, Manchester. Enjoy top plant-based cafés, vegetarian-friendly eateries, and meat-free dining options in ${readableLocation}.`,
            url: `https://www.manchesterveganguide.com/locations/${location}`,
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
            title: `Vegan and Vegetarian Restaurants in ${readableLocation} | Manchester Vegan Guide`,
            description: `Discover the best vegan and vegetarian restaurants in ${readableLocation}, Manchester. Enjoy top plant-based cafés, vegetarian-friendly eateries, and meat-free dining options in ${readableLocation}.`,
            images: ["/images/MVG-logo.webp"],
            site: "@MancVeganGuide",
        },
    };
}

export async function generateStaticParams() {
    const locations = [...new Set(data.map((rest) => rest.location))];
    return locations.map((location) => ({
        location: slugify(location),
    }));
}

export default async function LocationPage({ params }) {
    const { location } = await params;
    const restaurants = data.filter(
        (rest) => slugify(rest.location) === location
    );

    const readableLocation = restaurants[0]?.location || params.location;

    return (
        <Container fluid="lg">
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src={`/images/locations/${slugify(location)}.webp`}
                        alt={`A map of ${readableLocation}, Manchester`}
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        Vegan and Vegetarian Restaurants in {readableLocation}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <p>
                        Searching for the best vegan and vegetarian restaurants
                        in {readableLocation}? <br />
                        <br />
                        Find the top plant-based and
                        vegetarian-friendly spots in {readableLocation},
                        Manchester, where you can enjoy everything from quick
                        vegan lunches to flavourful meat-free dinners. Whether
                        you live nearby or you&apos;re just visiting, explore
                        delicious plant-based options in {readableLocation},
                        from vibrant cafés to creative vegetarian eateries.{" "}
                        <br />
                        <br />
                        Discover where to eat vegan and vegetarian in{" "}
                        {readableLocation}, Manchester, and find your next go-to
                        meat-free meal.
                    </p>
                </Col>
            </Row>

            <Row>
                {[...restaurants]
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
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <BackButton
                        url="/locations"
                        buttonText="Back to Locations"
                    />
                </Col>
            </Row>
        </Container>
    );
}
