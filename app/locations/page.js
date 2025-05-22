import data from "@/data/restaurants.json";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import styles from "./LocationsPage.module.css";

export const metadata = {
    title: "Vegan and Vegetarian Restaurants by Location | Manchester Vegan Guide",
    description:
        "Browse the best vegan and vegetarian restaurants in Manchester by area. Explore plant-based dining in the City Centre and Greater Manchester suburbs like Chorlton, Withington, and more.",
    keywords:
        "vegan restaurants Manchester locations, vegetarian restaurants Manchester locations, vegan restaurants by area Manchester, vegetarian cafes Manchester City Centre, vegan food Chorlton, plant-based Withington, vegan dining Greater Manchester, meat-free restaurants Manchester suburbs, vegan restaurants near me Manchester",
    openGraph: {
        title: "Best Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Explore Manchester's top vegan and vegetarian dining spots. Find cafés, pubs, bistros, and plant-based restaurants with our curated guide.",
        url: "https://www.manchesterveganguide.com/locations",
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

export default function Locations() {
    const cityCentreLocations = [
        ...new Set(
            data
                .filter((rest) => rest.centre?.toLowerCase() === "yes")
                .map((rest) => rest.location)
        ),
    ];

    const greaterManchesterLocations = [
        ...new Set(
            data
                .filter((rest) => rest.centre?.toLowerCase() === "no")
                .map((rest) => rest.location)
        ),
    ];

    return (
        <Container fluid="lg">
            <Row className="mb-2">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/pages/locations.webp"
                        alt="A yellow Manchester tram at a tram stop"
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        Vegan and Vegetarian Restaurant Manchester Locations
                    </h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={12} className="text-center my-5">
                    <h2>Manchester City Centre</h2>
                </Col>
                <Col xs={12} className="text-center">
                    <p>
                        Discover the heart of the city&apos;s plant-based dining
                        scene with our curated list of vegan and vegetarian
                        restaurants in Manchester City Centre. <br />
                        <br />
                        From the Northern Quarter to Deansgate, this area is
                        packed with vibrant vegan cafés, vegetarian street food
                        stalls, and trendy plant-based eateries. <br />
                        <br />
                        Whether you&apos;re exploring Oxford Road, enjoying the buzz
                        of Spinningfields, or grabbing lunch near Piccadilly,
                        Manchester City Centre offers some of the best meat-free
                        dining options in the UK.
                    </p>
                </Col>
            </Row>
            <Row>
                {cityCentreLocations.map((location) => (
                    <Col
                        xs={12}
                        md={6}
                        xl={4}
                        className={styles.LocationMainImage}
                        key={location}>
                        <Link
                            href={`/locations/${slugify(location)}`}
                            className={styles.LocationLink}>
                            <Image
                                src={`/images/locations/${slugify(
                                    location
                                )}.webp`}
                                alt={`A map of ${location}, Manchester`}
                                fill
                                sizes="(min-width: 1200px) 1140px, 100vw"
                                className={styles.LocationImage}
                            />
                            <h3 className={styles.LocationText}>
                                Restaurants in
                                <br />
                                <span>{location}</span>
                            </h3>
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xs={12} className="text-center my-5">
                    <h2>Greater Manchester</h2>
                </Col>
                <Col xs={12} className="mb-5 text-center">
                    <p>
                        Looking for vegan and vegetarian restaurants beyond the
                        city centre? <br />
                        <br />
                        Our Greater Manchester directory highlights top
                        plant-based dining spots in areas like Chorlton, Ashton,
                        Withington, and Cheadle. <br />
                        <br />
                        Whether you&apos;re after a cosy vegan brunch in Urmston or
                        vegetarian comfort food in Glossop, these suburbs are
                        home to a wide variety of delicious and accessible
                        meat-free restaurants. <br />
                        <br />
                        Explore the Greater Manchester plant-based scene and
                        find your next favourite local vegan or vegetarian
                        eatery.
                    </p>
                </Col>
            </Row>
            <Row>
                {greaterManchesterLocations.map((location) => (
                    <Col
                        xs={12}
                        md={6}
                        xl={4}
                        className={styles.LocationMainImage}
                        key={location}>
                        <Link
                            href={`/locations/${slugify(location)}`}
                            className={styles.LocationLink}>
                            <Image
                                src={`/images/locations/${slugify(
                                    location
                                )}.webp`}
                                alt="An empty restaurant, set and ready for service."
                                fill
                                sizes="(min-width: 1200px) 1140px, 100vw"
                                className={styles.LocationImage}
                            />
                            <h3 className={styles.LocationText}>
                                Restaurants in
                                <br />
                                <span>{location}</span>
                            </h3>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
