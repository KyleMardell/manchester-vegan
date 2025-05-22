import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

export const metadata = {
    title: "About Manchester Vegan Guide | Manchester Vegan Guide",
    description:
        "Learn more about the Manchester Vegan Guide – a simple, independent project built to help people find great vegan and vegetarian food around the city. Find out how it's made, where the info comes from, and how to get in touch.",
    keywords:
        "about Manchester Vegan Guide, vegan Manchester site info, vegetarian restaurant listings Manchester, vegan food blog Manchester, plant-based directory Manchester, Manchester vegan resources, vegan restaurant updates Manchester",

    openGraph: {
        title: "About Manchester Vegan Guide | Manchester Vegan Guide",
        description:
            "Discover the story behind Manchester Vegan Guide. Built to help you find the best vegan and vegetarian food in Manchester – no fuss, no ratings, just helpful info.",
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
        title: "About Manchester Vegan Guide",
        description:
            "A straightforward, solo-built guide to help you find vegan and vegetarian food in Manchester. Learn more about how and why it was made.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function About() {
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
                        Manchester Vegan Guide - About
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">About This Site</h2>
                    <p>
                        Hey — thanks for visiting Manchester Vegan Guide.
                        <br />
                        <br />
                        This started as a side project to collect and organise
                        all the great vegan and vegetarian places around
                        Manchester.
                        <br />
                        It&apos;s not meant to be anything flashy — just a simple way
                        to find somewhere decent to eat, whether you&apos;re fully
                        plant-based, trying it out, or tagging along with a
                        veggie friend who knows all the good spots.
                        <br />
                        <br />
                        There&apos;s a lot going on in Manchester&apos;s food scene, but
                        it can be a pain scrolling through maps, social posts,
                        and blogs to find somewhere new — especially if you&apos;re
                        trying to avoid meat or just want more choice. This site
                        is my attempt to make that easier.
                    </p>
                </Col>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">Where the Info Comes From</h2>
                    <p>
                        All the info listed here — addresses, links, opening
                        hours, and so on — was pulled together from publicly
                        available sources. That includes things like restaurant
                        websites, socials, Google listings, and a bit of digging
                        around where needed. I&apos;ve done my best to keep things
                        accurate and up to date.
                        <br />
                        <br />
                        Of course, places change. Menus shift, kitchens move, or
                        they quietly close without saying much. I try to check
                        and update the site around once a month, but it&apos;s a solo
                        project, so a few things might slip through the cracks
                        now and then.
                        <br />
                        <br />
                        If something&apos;s wrong, outdated, or missing, feel free to
                        get in touch. I appreciate it — just ask that you only
                        drop a message if it&apos;s something that genuinely needs
                        fixing.
                    </p>
                </Col>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">For Restaurants</h2>
                    <p>
                        If your business is listed here and you&apos;d like your
                        details changed or removed, no problem — just send a
                        quick message to manchesterveganguide@gmail.com and I&apos;ll
                        get it sorted. I want the info here to be fair and
                        helpful, so happy to update anything that&apos;s out of date
                        or not quite right.
                    </p>
                </Col>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">Images</h2>
                    <p>
                        All the images on the site come from{" "}
                        <Link
                            target="_blank"
                            rel="noopener"
                            href="https://www.pexels.com/">
                            Pexels
                        </Link>{" "}
                        and{" "}
                        <Link
                            target="_blank"
                            rel="noopener"
                            href="https://unsplash.com/">
                            Unsplash
                        </Link>
                        — both offer free, royalty-free photos under open
                        licenses. They&apos;ve been a great resource for adding some
                        colour to the site without having to take photos myself.
                        <br />
                        <br />
                        If you see an image that doesn&apos;t look right or you think
                        shouldn&apos;t be used, just let me know and I&apos;ll remove it.
                    </p>
                </Col>
                <Col xs={12} className="text-center">
                    <h2 className="my-3">Final Note</h2>
                    <p>
                        This guide was built just to help people find good food.{" "}
                        <br />
                        That&apos;s it — no reviews, no ratings, no drama. Just a
                        straightforward way to see what&apos;s out there.
                        <br />
                        Thanks for checking it out — hope it helps you find
                        somewhere new to eat soon.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
