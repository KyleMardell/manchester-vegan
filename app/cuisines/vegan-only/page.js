import data from "@/data/restaurants.json";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function VeganOnlyPage() {
    const veganOnlyRestaurants = data.filter((rest) => rest.type === "Vegan");

    return (
        <Container>
            <h1>100% Vegan Restaurants in Manchester</h1>
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
