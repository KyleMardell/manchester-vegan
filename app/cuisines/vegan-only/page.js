import data from "@/data/restaurants.json";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

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
            <h1>100% Vegan Restaurants in Manchester</h1>
            <p>
                Discover the best 100% vegan restaurants in Manchester, where
                every dish is completely plant-based and cruelty-free. This
                curated list features only fully vegan eateries—perfect for
                anyone seeking authentic vegan food in Manchester without
                compromise. From delicious vegan pizzas at Purezza to
                flavour-packed Chinese cuisine at Wawin Vegan and Vegan Green
                Kitchen, these Manchester vegan restaurants are dedicated to
                creative, meat-free dining. Whether you're looking for a quick
                bite, a healthy lunch, or a full sit-down dinner, these
                plant-based restaurants in Manchester offer something for every
                craving. Explore the top-rated vegan-only spots in Manchester
                and enjoy food that's ethical, sustainable, and seriously tasty.
            </p>
            <Row className="mb-4">
                {veganOnlyRestaurants.map((rest) => (
                    <Col xs={12} key={rest.name}>
                        <Link href={`/restaurants/${rest.slug}`}>
                            {rest.name}
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
