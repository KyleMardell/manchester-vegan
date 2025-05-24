import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./CookiePolicy.module.css";
import Link from "next/link";

export const metadata = {
    title: "Cookie Policy | Manchester Vegan Guide",
    description:
        "Learn more about the Manchester Vegan Guide - a simple, independent project built to help people find great vegan and vegetarian food around the city. Find out how it's made, where the info comes from, and how to get in touch.",
    keywords:
        "Cookie Policy, vegan Manchester site info, vegetarian restaurant listings Manchester, vegan food blog Manchester, plant-based directory Manchester, Manchester vegan resources, vegan restaurant updates Manchester",

    openGraph: {
        title: "Cookie Policy | Manchester Vegan Guide",
        description:
            "Discover the story behind Manchester Vegan Guide. Built to help you find the best vegan and vegetarian food in Manchester - no fuss, no ratings, just helpful info.",
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
        title: "Cookie Policy",
        description:
            "A straightforward, solo-built guide to help you find vegan and vegetarian food in Manchester. Learn more about how and why it was made.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function CookiePolicy() {
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
                        Manchester Vegan Guide - Cookie Policy
                    </h1>
                </Col>
            </Row>
            <Row>
                <h1 className="cookie-policy-h1">Cookie Policy</h1>
                <p>
                    Effective Date: 24-May-2025 <br />
                    Last Updated: 24-May-2025
                </p>
                &nbsp;
                <h5>What are cookies?</h5>
                <div className="cookie-policy-p">
                    <p>
                        This Cookie Policy explains what cookies are and how we
                        use them, the types of cookies we use i.e, the
                        information we collect using cookies and how that
                        information is used, and how to manage the cookie
                        settings.
                    </p>{" "}
                    <p>
                        Cookies are small text files that are used to store
                        small pieces of information. They are stored on your
                        device when the website is loaded on your browser. These
                        cookies help us make the website function properly, make
                        it more secure, provide better user experience, and
                        understand how the website performs and to analyze what
                        works and where it needs improvement.
                    </p>
                </div>
                &nbsp;
                <h5>How do we use cookies?</h5>
                <div className="cookie-policy-p">
                    <p>
                        As most of the online services, our website uses
                        first-party and third-party cookies for several
                        purposes. First-party cookies are mostly necessary for
                        the website to function the right way, and they do not
                        collect any of your personally identifiable data.
                    </p>{" "}
                    <p>
                        The third-party cookies used on our website are mainly
                        for understanding how the website performs, how you
                        interact with our website, keeping our services secure,
                        providing advertisements that are relevant to you, and
                        all in all providing you with a better and improved user
                        experience and help speed up your future interactions
                        with our website.
                    </p>
                </div>
                &nbsp;
                <h5>Types of Cookies we use</h5>
                <div className="cky-audit-table-element"></div>
                &nbsp;
                <h5>Manage cookie preferences</h5>
                <div>
                    <p>
                        You can change your cookie preferences any time by
                        clicking the button in the bottom left of the screen. This will let you revisit the
                        cookie consent banner and change your preferences or
                        withdraw your consent right away.{" "}
                    </p>{" "}
                    <p>
                        In addition to this, different browsers provide
                        different methods to block and delete cookies used by
                        websites. You can change the settings of your browser to
                        block/delete the cookies. Listed below are the links to
                        the support documents on how to manage and delete
                        cookies from the major web browsers.
                    </p>{" "}
                    <p>
                        Chrome:{" "}
                        <Link
                            target="_blank"
                            href="https://support.google.com/accounts/answer/32050">
                            https://support.google.com/accounts/answer/32050
                        </Link>
                    </p>
                    <p>
                        Safari:{" "}
                        <Link
                            target="_blank"
                            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">
                            https://support.apple.com/en-in/guide/safari/sfri11471/mac
                        </Link>
                    </p>
                    <p>
                        Firefox:{" "}
                        <Link
                            target="_blank"
                            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">
                            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
                        </Link>
                    </p>
                    <p>
                        Internet Explorer:{" "}
                        <Link
                            target="_blank"
                            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">
                            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                        </Link>
                    </p>
                    <p>
                        If you are using any other web browser, please visit
                        your browser’s official support documents.
                    </p>
                </div>
                &nbsp;
                <p className="cookie-policy-p">
                    Cookie Policy Generated By{" "}
                    <Link
                        target="_blank"
                        href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">
                        CookieYes - Cookie Policy Generator
                    </Link>
                    .
                </p>
            </Row>
        </Container>
    );
}
