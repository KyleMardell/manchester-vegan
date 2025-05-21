import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

const SiteFooter = () => {
    return (
        <Container fluid="lg">
            <Row className={`py-5 my-3 ${styles.PageFooter}`}>
                <Col
                    className={`text-center d-flex justify-content-center align-items-center py-5`}>
                    <Link href="/" className={`${styles.FooterLink}`}>
                        Manchester Vegan Guide
                    </Link>
                </Col>
                <Col className=" py-5">
                    <Row>
                        <Col
                            className={`text-center d-flex justify-content-center align-items-center`}>
                            <Link
                                href="https://x.com/MancVeganGuide"
                                target="_blank"
                                rel="noopener"
                                className={`${styles.SocialLink}`}>
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                        </Col>
                        <Col
                            className={`text-center d-flex justify-content-center align-items-center`}>
                            <Link
                                href="https://www.instagram.com/manc.veganguide/"
                                target="_blank"
                                rel="noopener"
                                className={`${styles.SocialLink}`}>
                                <i className="bi bi-instagram"></i>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col
                    className={`text-center d-flex justify-content-center align-items-center py-5`}>
                    <Link href="/about" className={`${styles.FooterLink}`}>
                        About
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default SiteFooter;
