import data from "@/data/restaurants.json";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
    return data.map((restaurant) => ({
        slug: restaurant.slug,
    }));
}

export default async function RestaurantPage({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return <p>Restaurant not found</p>;

    return (
        <Container>
            <Row>
                <h1>{restaurant.name}</h1>

                {restaurant.website != "N/A" ? (
                    <Col>
                        <Link
                            href={restaurant.website}
                            target="_blank"
                            rel="noopener">
                            Website - {restaurant.website}
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
                <Col>
                    <Link href={restaurant.menu} target="_blank" rel="noopener">
                        Menu Link
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h2>
                        {restaurant.type} Restaurant in {restaurant.location}.
                    </h2>
                    <p>{restaurant.summary}</p>
                </Col>
                <Col xs={12}>
                    <p>
                        {restaurant.reviews} Google reviews with an average
                        review score of {restaurant.score}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Address</h3>
                    <p>{restaurant.address}</p>
                </Col>
                <Col>
                    <h3>Phone</h3>
                    <p>{restaurant.phone}</p>
                </Col>
                <Col>
                    <h3>Opening Times</h3>
                    <p>{restaurant.times}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Social Media Links</h3>
                </Col>

                {restaurant.facebook != "N/A" ? (
                    <Col>
                        <Link
                            href={restaurant.facebook}
                            target="_blank"
                            rel="noopener">
                            Facebook Link
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.twitter != "N/A" ? (
                    <Col>
                        <Link
                            href={restaurant.twitter}
                            target="_blank"
                            rel="noopener">
                            X / Twitter Link
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.instagram != "N/A" ? (
                    <Col>
                        <Link
                            href={restaurant.instagram}
                            target="_blank"
                            rel="noopener">
                            Instagram Link
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            <Row>
                <Col xs={12}>
                    <Link href={restaurant.maps} target="_blank" rel="noopener">
                        Google Maps Link
                    </Link>
                </Col>
                <Col>
                    <div className="ratio ratio-16x9">
                        <iframe
                            src={restaurant.mapembed}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link href="/locations">
                        View more vegetarian and vegan restaurants.
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
