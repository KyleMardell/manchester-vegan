import rawData from "@/data/restaurants.json";
import { getVeganRestaurants, isFieldVerified, normalizeRestaurants } from "@/utils/restaurants";
import { getVerifiedHours } from "@/utils/restaurantDetails";
import { restaurantFood } from "@/utils/restaurantFood";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./RestaurantPage.module.css";

const data = normalizeRestaurants(rawData);

export async function generateStaticParams() {
    return data.map((restaurant) => ({
        slug: restaurant.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return {};

    const dietary = isFieldVerified(restaurant, "dietary") ? restaurant.dietary : null;
    const category = {
        fully_vegan: "Vegan Restaurant",
        vegetarian: "Vegetarian Restaurant",
        vegan_options: "Restaurant with vegan options",
    }[dietary] || "Restaurant";
    const isClosed = restaurant.status === "permanently_closed";
    const isTemporarilyClosed = restaurant.status === "temporarily_closed";
    const title = `${restaurant.name} - ${isClosed ? "Closed " : isTemporarilyClosed ? "Temporarily Closed " : ""}${category} | Manchester Vegan Guide`;
    const description = restaurant.status === "permanently_closed"
        ? `${restaurant.name} in ${restaurant.location} is permanently closed. Read the closure information and historical restaurant overview.`
        : isTemporarilyClosed
          ? `${restaurant.name} is temporarily closed. Read the restaurant information on Manchester Vegan Guide.`
          : `${restaurant.name}: ${category.toLowerCase()}. Read recorded restaurant details and historical Google ratings on Manchester Vegan Guide.`;
    const keywords = `${restaurant.name}, ${category.toLowerCase()}, ${isClosed ? "permanently closed restaurant, " : ""}Manchester Vegan Guide`;

    return {
        title,
        description,
        keywords,
        metadataBase: new URL("https://manchesterveganguide.com"),
        openGraph: {
            title,
            description,
            url: `https://manchesterveganguide.com/restaurants/${restaurant.slug}`,
            type: "website",
            images: [
                {
                    url: "/images/MVG-logo.webp",
                    width: 1200,
                    height: 630,
                    alt: `Manchester Vegan Guide logo for ${restaurant.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            image: "/images/MVG-logo.webp",
        },
        alternates: {
            canonical: `https://manchesterveganguide.com/restaurants/${restaurant.slug}`,
        },
    };
}

export default async function RestaurantPage({ params }) {
    const { slug } = await params;
    const restaurant = data.find((rest) => rest.slug === slug);

    if (!restaurant) return <p>Restaurant not found</p>;

    const isBreweryPreview = restaurant.slug === "bundobust-brewery";
    const dietaryBadge = isFieldVerified(restaurant, "dietary")
        ? { fully_vegan: "Vegan", vegetarian: "Vegetarian", vegan_options: "Vegan options" }[restaurant.dietary]
        : null;
    const food = restaurantFood[restaurant.slug];
    const practicalFacts = [
        { field: "facts.dineIn", label: "Dine-in", value: restaurant.facts?.dineIn },
        { field: "facts.takeaway", label: "Takeaway", value: restaurant.facts?.takeaway },
        { field: "facts.delivery", label: "Delivery", value: restaurant.facts?.delivery },
    ].filter(({ field, value }) => typeof value === "boolean" && isFieldVerified(restaurant, field));
    const rating = restaurant.googleRating;
    const hasHistoricalReviews = Number.isFinite(rating?.score) && rating.score > 0 && rating.score <= 5
        && typeof rating.legacyReviewCountText === "string" && /[1-9]/.test(rating.legacyReviewCountText);

    const isClosed = restaurant.status === "permanently_closed";
    const hasMenuUrl = typeof restaurant.menu === "string" && /^https?:\/\/\S+$/i.test(restaurant.menu);
    // An existing verification note records a postcode conflict for the former Withington venue.
    const hasVerifiedAddress = restaurant.slug !== "herbivorous-vegan-withington"
        && restaurant.address && restaurant.address !== "N/A" && isFieldVerified(restaurant, "address");
    const hasVerifiedPhone = !isClosed && restaurant.phone && restaurant.phone !== "N/A" && isFieldVerified(restaurant, "phone");
    const venueHours = getVerifiedHours(restaurant, "venue");
    const foodHours = getVerifiedHours(restaurant, "foodService");
    const isEighthDay = restaurant.slug === "the-eighth-day-shop-and-cafe";
    const reportedClosureDate = isClosed && restaurant.closedOn && isFieldVerified(restaurant, "closedOn")
        ? new Date(`${restaurant.closedOn}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
        : null;

    const closureTiming = reportedClosureDate
        ? `Reported final trading date: ${reportedClosureDate}.`
        : restaurant.slug === "the-allotment-vegan-vegetarian-eatery"
          ? "Reported closed in July 2026. The exact final trading date is unconfirmed."
          : restaurant.slug === "vegan-shack"
            ? "Closure reports refer to November and December 2025. The exact final trading date is unconfirmed."
            : "The exact final trading date is unconfirmed.";

    return (
        <Container fluid="lg">
            <Row>
                <Col xs={12} className="text-center my-5">
                    <h1 className={styles.RestTitle}>{restaurant.name}</h1>
                    {restaurant.status === "temporarily_closed" && (
                        <section aria-labelledby="temporary-closure-heading" className="alert alert-warning mt-4">
                            <h2 id="temporary-closure-heading" className={styles.TypeTitle}>Temporarily closed</h2>
                            <p>This restaurant is temporarily closed. Check with the restaurant before planning a visit.</p>
                        </section>
                    )}
                    {isClosed && (
                        <section aria-labelledby="closure-heading" className="alert alert-warning mt-4">
                            <h2 id="closure-heading" className={styles.TypeTitle}>Permanently closed</h2>
                            <p>{closureTiming}</p>
                            <p>This page is retained as a historical record. The information below describes the former restaurant and is not current trading information.</p>
                            <Link href="/restaurants">Browse active restaurant listings</Link>
                        </section>
                    )}
                </Col>
            </Row>
            <Row>
                <Col>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            aspectRatio: "4/3",
                        }}>
                        <Image
                            src={restaurant.image}
                            alt={restaurant.alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </Col>
            </Row>
            {!isClosed && <Row className="my-5">
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
                {hasMenuUrl && <Col className="text-center my-2">
                    <Link
                        href={restaurant.menu}
                        className={styles.RestLink}
                        target="_blank"
                        rel="noopener">
                        Menu <i className="bi bi-fork-knife"></i>
                    </Link>
                </Col>}
            </Row>}
            <Row>
                <Col xs={12} className="text-center mb-5">
                    <h2 className={styles.TypeTitle}>
                        {isClosed ? "Former " : ""}{dietaryBadge === "Vegan options" ? "Restaurant with vegan options" : dietaryBadge ? `${dietaryBadge} Restaurant` : "Restaurant"} in {restaurant.location}.
                    </h2>
                </Col>
                <Col xs={12} className="text-center mb-2">
                    {isBreweryPreview ? (
                        <section aria-labelledby="brewery-at-a-glance-heading" className={styles.BreweryAtAGlance}>
                            <h2 id="brewery-at-a-glance-heading" className={styles.TypeTitle}>At a glance</h2>
                            {dietaryBadge && <span className={`badge rounded-pill ${styles.DietaryBadge}`}>{dietaryBadge}</span>}
                            <ul className="text-start mt-4 mb-0">
                                {/* Supported by the official Bundobust menu checked for this preview. */}
                                <li className="mb-2"><strong>Food:</strong> Indian street food</li>
                                {restaurant.facts?.dineIn === true && isFieldVerified(restaurant, "facts.dineIn") && (
                                    <li><strong>Dine-in:</strong> Available</li>
                                )}
                                <li className="mt-2"><strong>Google reviews (historical, not recently verified):</strong> {restaurant.googleRating.legacyReviewCountText} reviews · {restaurant.googleRating.score}/5</li>
                            </ul>
                        </section>
                    ) : (
                        <section aria-labelledby="at-a-glance-heading" className={styles.BreweryAtAGlance}>
                            <h2 id="at-a-glance-heading" className={styles.TypeTitle}>{isClosed ? "Historical at a glance" : "At a glance"}</h2>
                            {dietaryBadge && <span className={"badge rounded-pill " + styles.DietaryBadge}>{dietaryBadge}</span>}
                            <ul className="text-start mt-4 mb-0">
                                {food && <li className="mb-2"><strong>{isClosed ? "Food previously served:" : "Food:"}</strong> {food.description}</li>}
                                {!isClosed && practicalFacts.map(({ field, label, value }) => (
                                    <li key={field} className="mb-2"><strong>{label}:</strong> {value ? "Available" : "Not available"}</li>
                                ))}
                                {!isClosed && restaurant.facts?.alcoholPolicy === "bring_your_own" && isFieldVerified(restaurant, "facts.alcoholPolicy") && (
                                    <li className="mb-2"><strong>BYOB:</strong> Bring your own</li>
                                )}
                                {hasHistoricalReviews && <li className="mt-2"><strong>Google reviews (historical, not recently verified):</strong> {rating.legacyReviewCountText} reviews {"\u00b7"} {rating.score}/5</li>}
                            </ul>
                        </section>
                    )}
                </Col>
            </Row>
            <Row>
                {hasVerifiedAddress && <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>{isClosed ? "Former address" : "Address"} <i className="bi bi-geo-alt"></i></h3>
                    <p className="m-0">{restaurant.address}</p>
                    <Link href={restaurant.maps} className={styles.RestLink} target="_blank" rel="noopener">Google Maps Link <i className="bi bi-map"></i></Link>
                </Col>}
                {hasVerifiedPhone && <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>{restaurant.slug === "world-peace-cafe" ? "Centre contact" : "Phone"} <i className="bi bi-telephone"></i></h3>
                    <p>{restaurant.phone}</p>
                </Col>}
                {venueHours.length > 0 && <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>{isEighthDay ? "Shop opening hours" : "Venue opening hours"} <i className="bi bi-clock"></i></h3>
                    <ul className="list-unstyled">{venueHours.map(({ day, hours }) => <li key={day}><strong>{day}:</strong> {hours}</li>)}</ul>
                </Col>}
                {foodHours.length > 0 && <Col className="mb-4">
                    <h3 className={styles.TypeTitle}>{isEighthDay ? "Cafe hours" : "Food-service hours"} <i className="bi bi-clock"></i></h3>
                    <ul className="list-unstyled">{foodHours.map(({ day, hours }) => <li key={day}><strong>{day}:</strong> {hours}</li>)}</ul>
                    {restaurant.slug === "the-globe" && <p>No food service on Christmas Eve, Christmas Day, New Year&apos;s Eve or New Year&apos;s Day.</p>}
                </Col>}
            </Row>
            <Row>
                <Col xs={12} className="text-center mb-4">
                    <h3 className={styles.TypeTitle}>Social Media Links</h3>
                </Col>

                {restaurant.facebook != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.facebook}
                            aria-label={`${restaurant.name} on Facebook`}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.twitter != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.twitter}
                            aria-label={`${restaurant.name} on X (Twitter)`}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-twitter-x" aria-hidden="true"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}

                {restaurant.instagram != "N/A" ? (
                    <Col className="text-center mb-4">
                        <Link
                            href={restaurant.instagram}
                            aria-label={`${restaurant.name} on Instagram`}
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noopener">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                        </Link>
                    </Col>
                ) : (
                    <></>
                )}
            </Row>
            {hasVerifiedAddress && <Row>
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
            </Row>}
            <Row>
                {getVeganRestaurants([restaurant]).length > 0 ? (
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
