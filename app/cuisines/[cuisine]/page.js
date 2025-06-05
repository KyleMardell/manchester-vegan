import RestaurantCard from "@/components/RestaurantCard";
import data from "@/data/restaurants.json";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./cuisine.module.css";
import BackButton from "@/components/BackButton";

export async function generateMetadata({ params }) {
    const awaitedParams = await params;
    const decodedCuisine = decodeURIComponent(awaitedParams.cuisine);

    const readableCuisine = decodedCuisine
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
        title: `Vegan and Vegetarian ${readableCuisine} food in Manchester | Manchester Vegan Guide`,
        description: `Find the best vegan and vegetarian ${readableCuisine} restaurants in Manchester. From spicy street food to authentic plant-based dishes, explore top spots serving ${readableCuisine} cuisine with meat-free menus.`,
        keywords: `vegan ${readableCuisine} Manchester, vegetarian ${readableCuisine} Manchester, plant-based ${readableCuisine} Manchester, ${readableCuisine} vegan food Manchester, ${readableCuisine} vegetarian restaurants, Manchester vegan guide, vegan ${readableCuisine} restaurants, meat-free ${readableCuisine} Manchester`,
        metadataBase: new URL("https://www.manchesterveganguide.com"),
        openGraph: {
            title: `Vegan and Vegetarian ${readableCuisine} Food in Manchester | Manchester Vegan Guide`,
            description: `Explore the top vegan and vegetarian ${readableCuisine} cuisine spots in Manchester. Discover plant-based restaurants and meat-free dining near you.`,
            url: `https://www.manchesterveganguide.com/cuisines/${awaitedParams.cuisine}`,
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
            title: `Vegan and Vegetarian ${readableCuisine} Food in Manchester | Manchester Vegan Guide`,
            description: `Explore the top vegan and vegetarian ${readableCuisine} cuisine spots in Manchester. Discover plant-based restaurants and meat-free dining near you.`,
            images: ["/images/MVG-logo.webp"],
            site: "@MancVeganGuide",
        },
        alternates: {
            canonical: `https://www.manchesterveganguide.com/cuisines/${awaitedParams.cuisine}`,
        },
    };
}

export async function generateStaticParams() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return allCuisines.map((cuisine) => ({
        cuisine: slugify(cuisine),
    }));
}

export default async function CuisinePage({ params }) {
    const awaitedParams = await params;
    const decodedCuisine = decodeURIComponent(awaitedParams.cuisine);
    const cuisineSlug = awaitedParams.cuisine.toLowerCase();

    const filteredRestaurants = data.filter((restaurant) =>
        restaurant.cuisine
            .split(",")
            .map((c) => slugify(c.trim().toLowerCase()))
            .includes(cuisineSlug)
    );

    const capitalizeWords = (str) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    const readableCuisine = capitalizeWords(decodedCuisine.replace(/-/g, " "));

    return (
        <Container fluid="lg">
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src={`/images/cuisines/${cuisineSlug}.webp`}
                        alt={`${readableCuisine} foods`}
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        Vegetarian and Vegan Restaurants serving{" "}
                        {readableCuisine}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <p>
                        Looking for delicious vegan {readableCuisine} in
                        Manchester? <br />
                        <br />
                        This short list highlights the top meat-free restaurants
                        in the city serving flavour-packed {
                            readableCuisine
                        }{" "}
                        dishes—all 100% vegetarian or vegan-friendly. Whether
                        you&apos;re after a casual bite, a spicy street food
                        experience, or a full sit-down meal, these Manchester
                        restaurants deliver the best plant-based{" "}
                        {readableCuisine} options around.
                        <br />
                        From well-known favourites to hidden gems, explore where
                        to enjoy vegan and vegetarian {readableCuisine} plates
                        in Manchester today.
                    </p>
                </Col>
            </Row>

            <Row>
                {[...filteredRestaurants]
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
                <Col className="my-5 text-center">
                    <BackButton url="/cuisines" buttonText="Back to Cuisines" />
                </Col>
            </Row>
        </Container>
    );
}
