import data from "@/data/restaurants.json";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
    const locations = [...new Set(data.map((rest) => rest.location))];
    return locations.map((location) => ({
        location: slugify(location),
    }));
}

export default async function LocationPage({ params }) {
    const { location } = await params;
    const restaurants = data.filter(
        (rest) => slugify(rest.location) === location
    );

    const readableLocation = restaurants[0]?.location || params.location;

    return (
        <Container>
            <h1>Vegan and Vegetarian Restaurants in {readableLocation}</h1>
            <p>
                Searching for the best vegan and vegetarian restaurants in{" "}
                {location}? This guide highlights the top plant-based and
                vegetarian-friendly spots in {location}, Manchester, where you
                can enjoy everything from quick vegan lunches to flavourful
                meat-free dinners. Whether you live nearby or you're just
                visiting, explore delicious plant-based options in {location}
                —from vibrant cafés to creative vegetarian eateries. Discover
                where to eat vegan and vegetarian in {location}, and find your
                next go-to meat-free meal.
            </p>
            <Row>
                {restaurants.map((rest) => (
                    <Col xs={12} key={rest.name}>
                        <Link href={`/restaurants/${rest.slug}`}>
                            {rest.name}
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row>
                <Link href="/locations">Back to Locations</Link>
            </Row>
        </Container>
    );
}
