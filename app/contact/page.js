import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./Contact.module.css";

export const metadata = {
    title: "Contact Manchester Vegan Guide | Manchester Vegan Guide",
    description:
        "Contact the Manchester Vegan Guide - a simple, independent project built to help people find great vegan and vegetarian food around the city. Find out how it's made, where the info comes from, and how to get in touch.",
    keywords:
        "Contact Manchester Vegan Guide, vegan Manchester site info, vegetarian restaurant listings Manchester, vegan food blog Manchester, plant-based directory Manchester, Manchester vegan resources, vegan restaurant updates Manchester",

    openGraph: {
        title: "Contact Manchester Vegan Guide | Manchester Vegan Guide",
        description:
            "Contact Manchester Vegan Guide. Built to help you find the best vegan and vegetarian food in Manchester - no fuss, no ratings, just helpful info.",
        url: "https://www.manchesterveganguide.com/about",
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
        title: "Contact Manchester Vegan Guide",
        description:
            "A straightforward, solo-built guide to help you find vegan and vegetarian food in Manchester. Learn more about how and why it was made.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function Contact() {
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
                    <h1 className={styles.HeroText}>
                        Manchester Vegan Guide - Contact
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">Contact</h2>
                    <p>
                        Hey! Thanks for checking out Manchester Vegan Guide —
                        appreciate you stopping by.
                        <br />
                        <br />
                        This whole site&apos;s just something I put together to
                        make it easier to find decent vegan and veggie spots
                        around Manchester. If you&apos;ve got a restaurant to
                        suggest, spotted something that needs fixing, or just
                        want to say hi, feel free to drop me a message.
                        <br />
                        <br />
                        Email: manchesterveganguide@gmail.com
                        <br />
                        <br />
                        I don&apos;t check it constantly (this is a little side
                        project I run in my spare time), but I do read
                        everything when I get a chance. If it&apos;s a helpful
                        tip or update, I&apos;ll try to get it sorted.
                        <br />
                        <br />
                        Just a heads-up: I&apos;m not connected to any of the
                        places listed here, so if you&apos;re looking to book a
                        table or ask about menus, it&apos;s best to contact the
                        restaurants directly.
                        <br />
                        <br />
                        Cheers again for visiting — hope the guide helps you
                        find some tasty food!Cheers again for visiting — hope
                        the guide helps you find some tasty food!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
