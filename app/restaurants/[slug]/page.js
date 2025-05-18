import data from "@/data/restaurants.json";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
    return data.map((restaurant) => ({
        slug: restaurant.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return {};

    const title = `${restaurant.name} - Vegan & Vegetarian Restaurant in Manchester | Manchester Vegan Guide`;
    const description = `${restaurant.name} is a ${restaurant.type} restaurant located in ${restaurant.location}. Explore their menu, find opening times, social media links, location, and more in this detailed guide.`;
    const keywords = `${restaurant.name}, vegan ${restaurant.type} restaurant, vegan restaurant in ${restaurant.location}, ${restaurant.location}, vegetarian restaurant in ${restaurant.location}, vegan restaurant in Manchester, vegetarian restaurant in Manchester, plant-based dining, ${restaurant.type} food, Manchester restaurant`;

    return {
        title,
        description,
        keywords,
        // openGraph: {
        //     title,
        //     description,
        //     url: `https://www.manchesterveganguide.com/restaurants/${restaurant.slug}`,
        //     type: "website",
        //     images: [
        //         {
        //             url: `/images/og-image-${restaurant.slug}.jpg`, // Ensure you have a custom image for each restaurant if possible
        //             width: 1200,
        //             height: 630,
        //             alt: `${restaurant.name} - Vegan and Vegetarian Restaurant in Manchester`,
        //         },
        //     ],
        // },
        // twitter: {
        //     card: "summary_large_image",
        //     title,
        //     description,
        //     image: `/images/og-image-${restaurant.slug}.jpg`, // Same for Twitter
        // },
        // canonical: `https://www.manchesterveganguide.com/restaurants/${restaurant.slug}`,
    };
}

export default async function RestaurantPage({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return <p>Restaurant not found</p>;

    return (
        <Container>
            <Row>
                <Col xs={12} className="text-center my-5">
                    <h1>{restaurant.name}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            aspectRatio: "16/9",
                        }}>
                        <Image
                            src="/images/MVG-logo.webp"
                            alt="Manchester Vegan Guide text over a portrait showing a table of fruit with a view of farmers fields in the background."
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="my-5">
                {restaurant.website != "N/A" ? (
                    <Col className="text-center my-2">
                        <Link
                            href={restaurant.website}
                            target="_blank"
                            rel="noopener">
                            Visit Restaurant Website <br /> {restaurant.website}
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
                <Col className="text-center my-2">
                    <Link href={restaurant.menu} target="_blank" rel="noopener">
                        Restaurant Menu <br /> {restaurant.menu}
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center mb-5">
                    <h2>
                        {restaurant.type} Restaurant in {restaurant.location}.
                    </h2>
                </Col>
                <Col xs={12} className="text-center mb-2">
                    <p>{restaurant.summary}</p>
                </Col>
                <Col xs={12} className="text-center mb-5">
                    <p>
                        {restaurant.reviews} Google reviews with an average
                        review score of {restaurant.score}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="mb-4">
                    <h3>Address</h3>
                    <p className="m-0">{restaurant.address}</p>
                    <Link href={restaurant.maps} target="_blank" rel="noopener">
                        Google Maps Link
                    </Link>
                </Col>
                <Col className="mb-4">
                    <h3>Phone</h3>
                    <p>{restaurant.phone}</p>
                </Col>
                <Col className="mb-4">
                    <h3>Opening Times</h3>
                    <p>{restaurant.times}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center mb-4">
                    <h3>Social Media Links</h3>
                </Col>

                {restaurant.facebook != "N/A" ? (
                    <Col className="text-center mb-4">
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
                    <Col className="text-center mb-4">
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
                    <Col className="text-center mb-4">
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
                            title="google maps"
                            src={restaurant.mapembed}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                {restaurant.type === "Vegan" ? (
                    <Link href="/cuisines/vegan-only">
                        View more vegan only restaurants in Manchester.
                    </Link>
                ) : (
                    <></>
                )}
                <Col xs={12} className="text-center my-5">
                    <Link href="/locations">
                        View more vegetarian and vegan restaurants in
                        Manchester.
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
