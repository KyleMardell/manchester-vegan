import data from "@/data/restaurants.json";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./RestaurantPage.module.css";

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
        openGraph: {
            title,
            description,
            url: `https://www.manchesterveganguide.com/restaurants/${restaurant.slug}`,
            type: "website",
            images: [
                {
                    url: "/images/MVG-logo.webp",
                    width: 1200,
                    height: 630,
                    alt: `${restaurant.name} - Vegan and Vegetarian Restaurant in Manchester`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            image: "/images/MVG-logo.webp",
        },
        canonical: `https://www.manchesterveganguide.com/restaurants/${restaurant.slug}`,
    };
}

export default async function RestaurantPage({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return <p>Restaurant not found</p>;

    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} className="text-center my-5">
                    <h1 className={styles.RestTitle}>{restaurant.name}</h1>
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
                            alt="Two books on a green table, one above the other, both with the Manchester Vegan Guide logo on the front."
                            fill
                            priority
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
                            className={`${styles.RestLink}`}
                            target="_blank"
                            rel="noopener">
                            <span>Visit Restaurant Website</span>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
                <Col className="text-center my-2">
                    <Link
                        href={restaurant.menu}
                        className={styles.RestLink}
                        target="_blank"
                        rel="noopener">
                        Menu <i className="bi bi-fork-knife"></i>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center mb-5">
                    <h2 className={styles.TypeTitle}>
                        {restaurant.type} Restaurant in {restaurant.location}.
                    </h2>
                    <p>Serving {restaurant.cuisine}, vegan cuisines.</p>
                </Col>
                <Col xs={12} className="text-center mb-2">
                    <h2 className={styles.TypeTitle}>Restaurant Overview</h2>
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
                    <h3 className={styles.TypeTitle}>Address <i className="bi bi-geo-alt"></i></h3>
                    <p className="m-0">{restaurant.address}</p>
                    <Link href={restaurant.maps} className={styles.RestLink} target="_blank" rel="noopener">
                        Google Maps Link <i className="bi bi-map"></i>
                    </Link>
                </Col>
                <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>Phone <i className="bi bi-telephone"></i></h3>
                    <p>{restaurant.phone}</p>
                </Col>
                <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>Opening Times <i className="bi bi-clock"></i></h3>
                    <p>{restaurant.times}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center mb-4">
                    <h3 className={styles.TypeTitle}>Social Media Links</h3>
                </Col>

                {restaurant.facebook != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.facebook}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-facebook"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.twitter != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.twitter}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-twitter-x"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.instagram != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.instagram}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-instagram"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            <Row>
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
                    <Link href="/restaurants" className={styles.CTALink}>
                        View more vegetarian and vegan restaurants in
                        Manchester.
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
