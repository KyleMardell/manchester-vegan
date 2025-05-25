import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./cookbooks.module.css";
import Link from "next/link";

export const metadata = {
    title: "Vegan Cookbooks | Manchester Vegan Guide",
    description:
        "Explore vegan and vegetarian cookbooks from Manchester Vegan Guide. Download the free mini cookbook packed with easy plant-based meals, and check back soon for a full version with even more recipes.",
    keywords:
        "vegan cookbook Manchester, free vegan recipes, vegetarian recipes Manchester, plant-based cookbook UK, Manchester vegan food, easy vegan meals, vegan batch cooking, vegan meal prep guide, vegetarian cookbook download",

    openGraph: {
        title: "Vegan Cookbooks | Manchester Vegan Guide",
        description:
            "Download the free Manchester Vegan Guide cookbook — a small collection of simple, plant-based meals you can batch and prep. More recipes and a full version coming soon.",
        url: "https://www.manchesterveganguide.com/cookbooks",
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
        title: "Vegan Cookbooks | Manchester Vegan Guide",
        description:
            "Grab the free Manchester Vegan Guide cookbook for easy vegan and vegetarian meal ideas. No fluff — just helpful plant-based recipes.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function Cookbooks() {
    return (
        <Container fluid="lg">
            <Row className={`${styles.HeroMainImage} p-0 mb-3`}>
                <Image
                    className="p-0"
                    src="/images/pages/cookbooks.webp"
                    alt="A person cooking with an open cookbook in a kitchen."
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
                    <h1 className={styles.HeroText}>
                        Vegan Cookbooks to Make Life Easier (and Tastier)
                    </h1>
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <p className="text-center px-3 mb-4">
                        Whether you're just getting into plant-based cooking or
                        looking for new go-to meals, this is the spot for easy
                        vegan and vegetarian recipe inspiration. I&apos;ve put
                        together a growing collection of recipes that are simple
                        to make, easy to batch cook, and taste great — even if
                        you&apos;re short on time or new to the kitchen. Start
                        with the free mini cookbook below, and keep an eye out
                        for the full version coming soon.
                    </p>
                </Col>
            </Row>
            <Row className="my-5">
                <Col xs={12} md={8} className="text-center">
                    <h2 className="my-4 text-center">
                        Download the Free Vegan Cookbook
                    </h2>
                    <p className="text-center px-3 mb-3">
                        This free mini cookbook includes a handful of solid,
                        no-fuss recipes I regularly make myself — perfect if
                        you're into prepping meals ahead of time or just want a
                        bit of inspiration without scrolling for ages.
                        Everything&apos;s plant-based, beginner-friendly, and
                        uses ingredients that are easy to find in the UK.
                    </p>
                    <Link
                        href="https://manchesterveganguide.gumroad.com/l/cokaw"
                        target="_blank"
                        rel="noopener"
                        className={`btn my-5 ${styles.CookbookButton}`}>
                        Grab the Free Cookbook
                    </Link>
                </Col>
                <Col
                    xs={12} md={4}
                    className="d-flex align-items-center justify-content-center">
                    <div style={{ width: "100%" }}>
                        <Image
                            src="/images/admedia/free-cookbook.webp"
                            alt="Pages from the Manchester Vegan Guide free vegan meal prep cookbook."
                            width={400}
                            height={500}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
