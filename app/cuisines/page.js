import data from "@/data/restaurants.json";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";

export default function CuisinesPage() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return (
        <Container>
            <h1>All Vegetarian and Vegan Cuisines</h1>
            <p>
                Explore the full variety of vegan and vegetarian cuisines
                available across Manchester. From flavourful Indian curries and
                plant-based Chinese classics to street food, falafel wraps,
                vegan pizza, and indulgent desserts, the city's meat-free food
                scene has something for every taste. Whether you're craving
                Lebanese mezze, Sicilian pasta, Pan-Asian dumplings, or
                American-style vegan burgers and fries, this guide helps you
                find the best vegetarian and vegan restaurants in Manchester by
                cuisine. Browse all categories below to discover your next
                plant-powered meal.
            </p>
            <Row>
                {allCuisines.map((cuisine) => (
                    <Col xs={12} key={cuisine}>
                        <Link href={`/cuisines/${slugify(cuisine)}`}>
                            {cuisine}
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
