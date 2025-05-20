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
        <Container>
            <Row className="mb-2">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/pages/locations.webp"
                        alt="An empty restaurant, set and ready for service."
                        fill
                        priority
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
                        Discover the heart of the city's plant-based dining
                        scene with our curated list of vegan and vegetarian
                        restaurants in Manchester City Centre. <br /><br />
                        From the Northern Quarter to Deansgate, this area is
                        packed with vibrant vegan cafés, vegetarian street food
                        stalls, and trendy plant-based eateries. <br /><br />
                        Whether you're exploring Oxford Road, enjoying the buzz
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
                        <Link href={`/locations/${slugify(location)}`}>
                            <Image
                                src={`/images/locations/${slugify(
                                    location
                                )}.webp`}
                                alt="An empty restaurant, set and ready for service."
                                fill
                                className={styles.LocationImage}
                            />
                            <h3 className={styles.LocationText}>
                                Vegetarian and Vegan <br /> Restaurants in{" "}
                                <br /> {location}
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
                        city centre? <br /><br />
                        Our Greater Manchester directory highlights top
                        plant-based dining spots in areas like Chorlton, Ashton,
                        Withington, and Cheadle. <br /><br />
                        Whether you're after a cosy vegan brunch in Urmston or
                        vegetarian comfort food in Glossop, these suburbs are
                        home to a wide variety of delicious and accessible
                        meat-free restaurants. <br /><br />
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
                        <Link href={`/locations/${slugify(location)}`}>
                            <Image
                                src={`/images/locations/${slugify(
                                    location
                                )}.webp`}
                                alt="An empty restaurant, set and ready for service."
                                fill
                                className={styles.LocationImage}
                            />
                            <h3 className={styles.LocationText}>
                                Vegetarian and Vegan <br /> Restaurants in{" "}
                                <br /> {location}
                            </h3>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
