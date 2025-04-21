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
            <Row>
                {filteredRestaurants.map((rest) => (
                    <Col xs={12} key={rest.slug}>
                        <Link href={`/restaurants/${rest.slug}`}>
                            {rest.name}
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
