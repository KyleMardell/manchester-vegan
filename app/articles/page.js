import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./articles.module.css";

export const metadata = {
    title: "Vegan News & Articles | Manchester Vegan Guide",
    description:
        "Read the latest vegan news, features, and articles from Manchester Vegan Guide. Stay updated with plant-based trends, restaurant openings, interviews, and helpful guides.",
    keywords:
        "vegan news Manchester, vegetarian news Manchester, plant-based articles Manchester, vegan lifestyle blog, vegan restaurant openings Manchester, vegan food trends, Manchester vegan updates, plant-based guides Manchester, vegan blog UK",

    openGraph: {
        title: "Vegan News & Articles | Manchester Vegan Guide",
        description:
            "Explore articles and updates from Manchester Vegan Guide. From new restaurant openings to plant-based lifestyle features, discover what’s happening in Manchester’s vegan scene.",
        url: "https://www.manchesterveganguide.com/articles",
        siteName: "Manchester Vegan Guide",
        images: [
            {
                url: "/images/MVG-logo.webp",
                width: 1200,
                height: 630,
                alt: "Manchester Vegan Guide logo with plant-based food theme",
            },
        ],
        type: "website",
        locale: "en_GB",
    },

    twitter: {
        card: "summary_large_image",
        title: "Latest Vegan Articles & Updates | Manchester Vegan Guide",
        description:
            "Catch up on the latest articles, tips, and updates from the Manchester vegan scene. Fresh content for plant-based living in the city.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function Articles() {
    return (
        <Container fluid="lg">
            <Row className={`${styles.HeroMainImage} p-0 mb-3`}>
                <Image
                    className="p-0"
                    src="/images/manchester-skyline.webp"
                    alt="The Manchester skyline"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1140px"
                    style={{
                        objectFit: "cover",
                        zIndex: 0,
                        filter: "brightness(0.6)",
                    }}
                />
                <Col style={{ zIndex: 1 }} className="p-0">
                    <h1 className={styles.HeroText}>News / Articles</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    <p>
                        A bit of extra reading if you&apos;re into that sort of
                        thing. <br />
                        This section includes articles about vegan and
                        vegetarian food in Manchester — restaurant roundups,
                        plant-based eating tips, updates from the local scene,
                        and anything else that might help you find decent places
                        to eat. Everything&apos;s written to be useful,
                        down-to-earth, and focused on making it easier to enjoy
                        good food around the city. Scroll down to check out the
                        latest posts.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
