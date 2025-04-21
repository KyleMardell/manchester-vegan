import data from "@/data/restaurants.json";
import { slugify } from "@/utils/slugify";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return allCuisines.map((cuisine) => ({
        cuisine: slugify(cuisine),
    }));
}

export default async function CuisinePage({ params }) {
    const { cuisine } = await params;
    const cuisineSlug = cuisine;

    const filteredRestaurants = data.filter((restaurant) =>
        restaurant.cuisine
            .split(",")
            .map((c) => slugify(c.trim()))
            .includes(cuisineSlug)
    );

    const capitalizeWords = (str) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    const readableCuisine = capitalizeWords(cuisineSlug.replace(/-/g, " "));

    return (
        <Container>
            <h1>Vegetarian and Vegan Restaurants serving {readableCuisine}</h1>
            <p>
                Looking for delicious vegan {cuisine} in
                Manchester? This short list highlights the top meat-free
                restaurants in the city serving flavour-packed {cuisine}{" "}
                dishes—all 100% vegetarian or vegan-friendly. Whether you're
                after a casual bite, a spicy street food experience, or a full
                sit-down meal, these Manchester restaurants deliver the best
                plant-based {cuisine} options around. From well-known favourites
                to hidden gems, explore where to enjoy vegan and vegetarian{" "}
                {cuisine} plates in Manchester today.
            </p>
            <Row>
                {filteredRestaurants.map((rest) => (
                    <Col xs={12} key={rest.slug}>
                        <Link href={`/restaurants/${rest.slug}`}>
                            {rest.name}
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row>
                <Link href="/cuisines">Back to Cuisines</Link>
            </Row>
        </Container>
    );
}
