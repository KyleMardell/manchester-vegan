import data from "@/data/restaurants.json";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import CuisineCard from "@/components/CuisineCard";
import styles from "./CuisinesPage.module.css";
import Link from "next/link";

export const metadata = {
    title: "Vegan and Vegetarian Cuisines in Manchester | Manchester Vegan Guide",
    description:
        "Explore a wide range of vegan and vegetarian cuisines in Manchester. From Indian curries and falafel wraps to vegan pizza, dumplings, and desserts, discover the best plant-based food by cuisine.",
    keywords:
        "vegan cuisines Manchester, vegetarian cuisines Manchester, plant-based food Manchester, vegan food by cuisine, vegetarian restaurants by cuisine, Manchester vegan guide, vegan Indian Manchester, vegan Chinese Manchester, vegan pizza Manchester, vegetarian food Manchester",

    openGraph: {
        title: "Best Vegan and Vegetarian Restaurants in Manchester | Manchester Vegan Guide",
        description:
            "Explore Manchester's top vegan and vegetarian dining spots. Find cafés, pubs, bistros, and plant-based restaurants with our curated guide.",
        url: "https://www.manchesterveganguide.com/cuisines",
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
};

export default function Cuisines() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return (
        <Container fluid="lg">
            <Row className="mb-3">
                <Col xs={12} className={styles.HeroMainImage}>
                    <Image
                        src="/images/pages/cuisines.webp"
                        alt="A table of vegan foods, salads and fruits from a top down perspective"
                        fill
                        priority
                        sizes="(min-width: 1200px) 1140px, 100vw"
                        className={styles.HeroImage}
                    />
                    <h1 className={styles.HeroText}>
                        All Vegetarian and Vegan Cuisines in Manchester
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="my-5 text-center">
                    <p>
                        Explore the full range of vegan and vegetarian flavours
                        across Manchester — the city&apos;s meat-free food scene is
                        packed with variety and global inspiration. Whether it&apos;s
                        rich, comforting Indian curries or fresh Chinese
                        plant-based dishes, there&apos;s something to suit every
                        taste.
                        <br />
                        Craving quick street food? Think crispy falafel wraps,
                        loaded vegan burgers, or fluffy bao buns. After
                        something a bit more relaxed? There&apos;s Sicilian-style
                        pasta, Lebanese mezze, and even proper wood-fired vegan
                        pizza. From Pan-Asian dumplings to American-style
                        comfort food, the mix of cuisines here shows just how
                        exciting plant-based eating in Manchester can be.
                        <br />
                        <br />
                        Check out the categories below to dive into the
                        city&apos;s best vegan and veggie spots by cuisine.
                        Ideal for finding a new favourite or trying something
                        completely different.
                    </p>
                </Col>
            </Row>
            <Row>
                {allCuisines
                    .slice()
                    .sort((a, b) => a.localeCompare(b))
                    .map((cuisine, index) => (
                        <CuisineCard
                            key={cuisine}
                            cuisine={cuisine}
                            imageUrl={`/images/cuisines/${slugify(
                                cuisine
                            )}.webp`}
                            priority={index === 0}
                        />
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
