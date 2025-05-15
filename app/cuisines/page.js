import data from "@/data/restaurants.json";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import CuisineCard from "@/components/CuisineCard";

export const metadata = {
    title: "Vegan and Vegetarian Cuisines in Manchester | Manchester Vegan Guide",
    description:
        "Explore a wide range of vegan and vegetarian cuisines in Manchester. From Indian curries and falafel wraps to vegan pizza, dumplings, and desserts, discover the best plant-based food by cuisine.",
    keywords:
        "vegan cuisines Manchester, vegetarian cuisines Manchester, plant-based food Manchester, vegan food by cuisine, vegetarian restaurants by cuisine, Manchester vegan guide, vegan Indian Manchester, vegan Chinese Manchester, vegan pizza Manchester, vegetarian food Manchester",
};

export default function Cuisines() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return (
        <Container>
            <Row>
                <Col xs={12} className="text-center">
                    <h1>All Vegetarian and Vegan Cuisines</h1>
                </Col>
                <Col xs={12}>
                    <p>
                        Explore the full variety of vegan and vegetarian
                        cuisines available across Manchester. <br />
                        From flavourful Indian curries and plant-based Chinese
                        classics to street food, falafel wraps, and vegan pizza,
                        the city's meat-free food scene has something for every
                        taste. <br />
                        Whether you're craving Lebanese mezze, Sicilian pasta,
                        Pan-Asian dumplings, or American-style vegan burgers and
                        fries, here you will find the best vegetarian and
                        vegan restaurants in Manchester by cuisine.
                        <br />
                        Browse all categories below to discover Manchester's
                        best vegan cuisines.
                    </p>
                </Col>
            </Row>

            <Row>
                {allCuisines.map((cuisine, index) => (
                    <CuisineCard
                        key={cuisine}
                        cuisine={cuisine}
                        imageUrl={`/images/cuisines/${slugify(cuisine)}.webp`}
                        priority={index === 0}
                    />
                ))}
            </Row>
        </Container>
    );
}
