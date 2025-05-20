import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const SiteFooter = () => {
    return (
        <footer>
            <Row>
                <Col>
                    <p>Manchester Vegan Guide</p>
                    <Link href="https://twitter.com">
                        <i className="bi bi-twitter-x"></i>
                    </Link>
                    <Link href="https://instagram.com">
                        <i className="bi bi-instagram"></i>
                    </Link>
                </Col>
            </Row>
        </footer>
    );
};

export default SiteFooter;
