import data from "@/data/restaurants.json";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";

export async function generateMetadata({ params }) {
    const { location } = await params;

    // You may want to convert the slug back to the original label, but here's a readable fallback:
    const readableLocation = location
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        title: `Vegan and Vegetarian Restaurants in ${readableLocation} | Manchester Vegan Guide`,
        description: `Discover the best vegan and vegetarian restaurants in ${readableLocation}, Manchester. Enjoy top plant-based cafés, vegetarian-friendly eateries, and meat-free dining options in ${readableLocation}.`,
        keywords: `vegan restaurants ${readableLocation}, vegetarian restaurants ${readableLocation}, plant-based food ${readableLocation}, vegan cafes ${readableLocation}, vegetarian dining ${readableLocation}, Manchester vegan guide, vegan food ${readableLocation}, vegetarian food ${readableLocation}`,
    };
}

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
