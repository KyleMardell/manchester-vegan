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