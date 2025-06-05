import RestaurantCard from "@/components/RestaurantCard";
import data from "@/data/restaurants.json";
import styles from "./VeganOnlyPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Vegan Restaurants in Manchester | Manchester Vegan Guide",
    description:
        "Explore fully vegan restaurants in Manchester serving 100% plant-based, cruelty-free food. From vegan pizzas and Asian cuisine to healthy lunches and sit-down dinners, discover top-rated vegan-only spots in the city.",
    keywords:
        "vegan restaurants in Manchester, vegan restaurants Manchester, fully vegan Manchester, vegan-only restaurants Manchester, plant-based food Manchester, vegan dining Manchester, cruelty-free restaurants Manchester, vegan pizza Manchester, vegan Asian food Manchester, Manchester vegan guide",
    openGraph: {
        title: "Best Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Explore Manchester's top vegan and vegetarian dining spots. Find cafés, pubs, bistros, and plant-based restaurants with our curated guide.",
        url: "https://manchesterveganguide.com/cuisines/vegan-only",
        siteName: "Manchester Vegan Guide",
        images: [
            {
                url: "/images/MVG-logo.webp",
                width: 1200,
                height: 630,
                alt: "Vegan and vegetarian restaurant in Manchester set and ready for guests",
            },
        ],
        type: "website",
        locale: "en_GB",
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Vegan and Vegetarian Restaurants in Manchester",
        description:
            "Find the best vegan and vegetarian food in Manchester. Your complete guide to meat-free dining across the city.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
    alternates: {
        canonical: "https://manchesterveganguide.com/cuisines/vegan-only",
    }
};

export default function VeganOnlyPage() {
    const veganOnlyRestaurants = data.filter((rest) => rest.type === "Vegan");

    return (
        <Container fluid="lg">
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/vegan-only.webp"
                        alt="A neon sign with the words, 100% Vegan"
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        Vegan Restaurants in Manchester
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <p>
                        Looking for proper 100% vegan restaurants in Manchester?
                        These fully plant-based spots take all the guesswork out
                        of eating out — everything on the menu is completely
                        free from meat, dairy, and other animal products.
                        It&apos;s all about good food, done ethically and
                        sustainably.
                        <br />
                        <br />
                        From the wood-fired pizzas at Purezza to the bold,
                        Chinese-inspired flavours at places like Wawin Vegan and
                        Vegan Green Kitchen, these restaurants are raising the
                        bar for plant-based cooking in Manchester. Big on taste
                        and creativity, they&apos;re serving up dishes that
                        prove vegan food&apos;s got plenty to offer, no matter
                        what you&apos;re craving.
                        <br />
                        <br />
                        Whether it&apos;s a quick lunch, a healthier takeaway,
                        or a proper sit-down meal, these fully vegan spots have
                        it covered. No checking ingredients, no awkward
                        substitutions — just solid, flavour-packed meals made
                        entirely from plants. Have a look through the
                        city&apos;s top-rated vegan-only restaurants and tuck
                        into something that&apos;s both satisfying and
                        worry-free.
                    </p>
                </Col>
            </Row>
            <Row className="mb-4">
                {[...veganOnlyRestaurants]
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
                <Col xs={12} className="text-center p-3 my-5">
                    <Link href="/restaurants" className={styles.HeroLink}>
                        Find All the Vegan & Vegetarian Restaurants in
                        Manchester
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
