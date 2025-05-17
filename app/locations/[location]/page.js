import data from "@/data/restaurants.json";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import RestaurantCard from "@/components/RestaurantCard";

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
            <Row>
                <Col xs={12} className="text-center my-5">
                    <h1>
                        Vegan and Vegetarian Restaurants in {readableLocation}
                    </h1>
                </Col>
                <Col xs={12} className="mb-5">
                    <p>
                        Searching for the best vegan and vegetarian restaurants
                        in {location}? This guide highlights the top plant-based
                        and vegetarian-friendly spots in {location}, Manchester,
                        where you can enjoy everything from quick vegan lunches
                        to flavourful meat-free dinners. Whether you live nearby
                        or you're just visiting, explore delicious plant-based
                        options in {location}
                        —from vibrant cafés to creative vegetarian eateries.
                        Discover where to eat vegan and vegetarian in {location}
                        , and find your next go-to meat-free meal.
                    </p>
                </Col>
            </Row>

            <Row>
                {[...restaurants]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((restaurant) => (
                        <Col xs={12} md={6} xl={4} key={restaurant.name}>
                            <RestaurantCard
                                name={restaurant.name}
                                slug={restaurant.slug}
                                restType={restaurant.type}
                                location={restaurant.location}
                                mapembed={restaurant.mapembed}
                                cuisine={restaurant.cuisine}
                            />
                        </Col>
                    ))}
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <Link href="/locations">Back to Locations</Link>
                </Col>
            </Row>
        </Container>
    );
}
