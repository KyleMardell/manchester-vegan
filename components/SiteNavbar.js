"use client";

import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

export default function SiteNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Manchester Vegan Guide
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} href="/restaurants">
                            All Restaurants
                        </Nav.Link>
                        <Nav.Link as={Link} href="/">
                            Vegan Only Restaurants
                        </Nav.Link>
                        <Nav.Link as={Link} href="/">
                            Blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
