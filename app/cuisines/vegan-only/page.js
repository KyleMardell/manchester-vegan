import RestaurantCard from "@/components/RestaurantCard";
import data from "@/data/restaurants.json";
import styles from "./VeganOnlyPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export const metadata = {
    title: "100% Vegan Restaurants in Manchester | Manchester Vegan Guide",
    description:
        "Explore fully vegan restaurants in Manchester serving 100% plant-based, cruelty-free food. From vegan pizzas and Asian cuisine to healthy lunches and sit-down dinners, discover top-rated vegan-only spots in the city.",
    keywords:
        "100% vegan restaurants Manchester, fully vegan Manchester, vegan-only restaurants Manchester, plant-based food Manchester, vegan dining Manchester, cruelty-free restaurants Manchester, vegan pizza Manchester, vegan Asian food Manchester, Manchester vegan guide",
};

export default function VeganOnlyPage() {
    const veganOnlyRestaurants = data.filter((rest) => rest.type === "Vegan");

    return (
        <Container>
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/pages/vegan-only.webp"
                        alt="An empty restaurant, set and ready for service."
                        fill
                        priority
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        100% Vegan Restaurants in Manchester
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mb-5">
                    <p>
                        Discover the best 100% vegan restaurants in Manchester,
                        where every dish is completely plant-based and
                        cruelty-free. This curated list features only fully
                        vegan eateries—perfect for anyone seeking authentic
                        vegan food in Manchester without compromise. From
                        delicious vegan pizzas at Purezza to flavour-packed
                        Chinese cuisine at Wawin Vegan and Vegan Green Kitchen,
                        these Manchester vegan restaurants are dedicated to
                        creative, meat-free dining. Whether you're looking for a
                        quick bite, a healthy lunch, or a full sit-down dinner,
                        these plant-based restaurants in Manchester offer
                        something for every craving. Explore the top-rated
                        vegan-only spots in Manchester and enjoy food that's
                        ethical, sustainable, and seriously tasty.
                    </p>
                </Col>
            </Row>

            <Row className="mb-4">
                {[...veganOnlyRestaurants]
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
