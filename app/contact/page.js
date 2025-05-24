import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./Contact.module.css";

export const metadata = {
    title: "Contact Us | Manchester Vegan Guide",
    description:
        "Get in touch with Manchester Vegan Guide. Suggest a restaurant, share an update, or ask a question. This independent site is here to help you find the best vegan and vegetarian spots in Manchester.",
    keywords:
        "contact Manchester Vegan Guide, suggest vegan restaurant Manchester, vegan listings contact, plant-based directory contact, Manchester vegan food tips, contact vegan blog, get in touch vegan guide Manchester",

    openGraph: {
        title: "Contact Manchester Vegan Guide | Get in Touch",
        description:
            "Want to suggest a vegan restaurant or share a tip? Reach out to Manchester Vegan Guide – your go-to resource for plant-based food in Manchester.",
        url: "https://www.manchesterveganguide.com/contact",
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
            "Got a suggestion or spotted an error? Drop a message to Manchester Vegan Guide – helping you find the best vegan and vegetarian food in the city.",
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
