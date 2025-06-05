import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./PrivacyPolicy.module.css";

export const metadata = {
    title: "Privacy Policy | Manchester Vegan Guide",
    description:
        "Learn more about the Manchester Vegan Guide - a simple, independent project built to help people find great vegan and vegetarian food around the city. Find out how it's made, where the info comes from, and how to get in touch.",
    keywords:
        "Privacy Policy, vegan Manchester site info, vegetarian restaurant listings Manchester, vegan food blog Manchester, plant-based directory Manchester, Manchester vegan resources, vegan restaurant updates Manchester",

    openGraph: {
        title: "Privacy Policy | Manchester Vegan Guide",
        description:
            "Discover the story behind Manchester Vegan Guide. Built to help you find the best vegan and vegetarian food in Manchester - no fuss, no ratings, just helpful info.",
        url: "https://manchesterveganguide.com/about",
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
        title: "Privacy Policy",
        description:
            "A straightforward, solo-built guide to help you find vegan and vegetarian food in Manchester. Learn more about how and why it was made.",
        images: ["/images/MVG-logo.webp"],
        site: "@MancVeganGuide",
    },
};

export default function PrivacyPolicy() {
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
                        Manchester Vegan Guide - Privacy Policy
                    </h1>
                </Col>
            </Row>
            <Row>
                <h1 className="privacy-policy-h1">Privacy Policy</h1>
                <p>Last Updated On 24-May-2025</p>
                <p>Effective Date 24-May-2025</p>

                <p className="privacy-policy-p">
                    This Privacy Policy describes the policies of Manchester
                    Vegan Guide, Manchester, Greater Manchester Manchester,
                    United Kingdom of Great Britain and Northern Ireland (the),
                    email: manchesterveganguide@gmail.com, phone: 0123456789 on
                    the collection, use and disclosure of your information that
                    we collect when you use our website (
                    https://manchesterveganguide.com ). (the “Service”). By
                    accessing or using the Service, you are consenting to the
                    collection, use and disclosure of your information in
                    accordance with this Privacy Policy. If you do not consent
                    to the same, please do not access or use the Service.
                </p>

                <p className="privacy-policy-p">
                    We may modify this Privacy Policy at any time without any
                    prior notice to you and will post the revised Privacy Policy
                    on the Service. The revised Policy will be effective 180
                    days from when the revised Policy is posted in the Service
                    and your continued access or use of the Service after such
                    time will constitute your acceptance of the revised Privacy
                    Policy. We therefore recommend that you periodically review
                    this page.
                </p>

                <ol className="privacy-policy-ol">
                    <li>
                        <h2 className="privacy-policy-h2">
                            Information We Collect:
                        </h2>

                        <p className="privacy-policy-p">
                            We will collect and process the following personal
                            information about you:
                        </p>
                        <ol className="privacy-policy-ol"></ol>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">
                            How We Use Your Information:
                        </h2>
                        <p className="privacy-policy-p">
                            We will use the information that we collect about
                            you for the following purposes:
                        </p>
                        <ol className="privacy-policy-ol">
                            <li>Marketing/ Promotional</li>

                            <li>Targeted advertising</li>
                        </ol>
                        <p className="privacy-policy-p">
                            If we want to use your information for any other
                            purpose, we will ask you for consent and will use
                            your information only on receiving your consent and
                            then, only for the purpose(s) for which grant
                            consent unless we are required to do otherwise by
                            law.
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">
                            How We Share Your Information:
                        </h2>

                        <p className="privacy-policy-p">
                            We will not transfer your personal information to
                            any third party without seeking your consent, except
                            in limited circumstances as described below:
                        </p>
                        <ol className="privacy-policy-ol">
                            <li>Ad service</li>

                            <li>Analytics</li>
                        </ol>

                        <p className="privacy-policy-p">
                            We require such third party&apos;s to use the personal
                            information we transfer to them only for the purpose
                            for which it was transferred and not to retain it
                            for longer than is required for fulfilling the said
                            purpose.
                        </p>
                        <p className="privacy-policy-p">
                            We may also disclose your personal information for
                            the following: (1) to comply with applicable law,
                            regulation, court order or other legal process; (2)
                            to enforce your agreements with us, including this
                            Privacy Policy; or (3) to respond to claims that
                            your use of the Service violates any third-party
                            rights. If the Service or our company is merged or
                            acquired with another company, your information will
                            be one of the assets that is transferred to the new
                            owner.
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">
                            Retention Of Your Information:
                        </h2>
                        <p className="privacy-policy-p">
                            We will retain your personal information with us for
                            90 days to 2 years after user accounts remain idle
                            or for as long as we need it to fulfill the purposes
                            for which it was collected as detailed in this
                            Privacy Policy. We may need to retain certain
                            information for longer periods such as
                            record-keeping / reporting in accordance with
                            applicable law or for other legitimate reasons like
                            enforcement of legal rights, fraud prevention, etc.
                            Residual anonymous information and aggregate
                            information, neither of which identifies you
                            (directly or indirectly), may be stored
                            indefinitely.
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">Your Rights:</h2>
                        <p className="privacy-policy-p">
                            Depending on the law that applies, you may have a
                            right to access and rectify or erase your personal
                            data or receive a copy of your personal data,
                            restrict or object to the active processing of your
                            data, ask us to share (port) your personal
                            information to another entity, withdraw any consent
                            you provided to us to process your data, a right to
                            lodge a complaint with a statutory authority and
                            such other rights as may be relevant under
                            applicable laws. To exercise these rights, you can
                            write to us at manchesterveganguide@gmail.com. We
                            will respond to your request in accordance with
                            applicable law.
                        </p>

                        <p className="privacy-policy-p">
                            Do note that if you do not allow us to collect or
                            process the required personal information or
                            withdraw the consent to process the same for the
                            required purposes, you may not be able to access or
                            use the services for which your information was
                            sought.
                        </p>
                    </li>
                    <li>
                        <h2 className="privacy-policy-h2">Cookies Etc.</h2>
                        <p className="privacy-policy-p">
                            To learn more about how we use these and your
                            choices in relation to these tracking technologies,
                            please refer to our
                            <a href="https://manchesterveganguide.com/cookie-policy">
                                Cookie Policy.
                            </a>
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">Security:</h2>
                        <p className="privacy-policy-p">
                            The security of your information is important to us
                            and we will use reasonable security measures to
                            prevent the loss, misuse or unauthorized alteration
                            of your information under our control. However,
                            given the inherent risks, we cannot guarantee
                            absolute security and consequently, we cannot ensure
                            or warrant the security of any information you
                            transmit to us and you do so at your own risk.
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">
                            Third Party Links & Use Of Your Information:
                        </h2>
                        <p className="privacy-policy-p">
                            Our Service may contain links to other websites that
                            are not operated by us. This Privacy Policy does not
                            address the privacy policy and other practices of
                            any third parties, including any third party
                            operating any website or service that may be
                            accessible via a link on the Service. We strongly
                            advise you to review the privacy policy of every
                            site you visit. We have no control over and assume
                            no responsibility for the content, privacy policies
                            or practices of any third party sites or services.
                        </p>
                    </li>

                    <li>
                        <h2 className="privacy-policy-h2">
                            Grievance / Data Protection Officer:
                        </h2>
                        <p className="privacy-policy-p">
                            If you have any queries or concerns about the
                            processing of your information that is available
                            with us, you may email our Grievance Officer at
                            Manchester Vegan Guide, Manchester, email:
                            manchesterveganguide@gmail.com. We will address your
                            concerns in accordance with applicable law.
                        </p>
                    </li>
                </ol>
                <p className="privacy-policy-p">
                    Privacy Policy generated with{" "}
                    <a
                        target="_blank"
                        href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW">
                        CookieYes
                    </a>
                    .
                </p>
            </Row>
        </Container>
    );
}
