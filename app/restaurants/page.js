import data from "@/data/restaurants.json";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function Restaurants() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Vegan and Vegetarian Restaurants in Manchester</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Welcome to the ultimate Manchester vegan food guide—your
                        go-to directory for the best vegan and vegetarian
                        restaurants across the city. Whether you're craving a
                        hearty vegan pub menu, vegetarian Chinese food packed
                        with flavour, or a stylish plant-based bistro, you'll
                        find it all here in one place. This complete list of the 25+
                        meat-free restaurants in Manchester showcases everything
                        from hidden gems and street food stalls to well-known
                        vegan hotspots. Browse all listings, discover new
                        favourites, and explore the ever-growing world of
                        plant-based dining in Manchester. Whether you're local
                        or just visiting, this guide makes it easy to eat well
                        and meat-free.
                    </p>
                </Col>
            </Row>
            <Row>
                {data.map((restaurant) => (
                    <Col xs={12}>
                    <Link key={restaurant.name} href={`/restaurants/${restaurant.slug}`}>{restaurant.name}</Link>
                </Col>
                ))}
            </Row>
        </Container>
    );
}
