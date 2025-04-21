"use client";

import Link from "next/link";
import useClickOutsideToggle from "@/hooks/useClickOutsideToggle";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function SiteNavbar() {
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    return (
        <Navbar
            expanded={expanded}
            expand="lg"
            className="bg-body-tertiary"
            ref={ref}>
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Manchester Vegan Guide
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} href="/restaurants" onClick={() => setExpanded(false)}>
                            All Restaurants
                        </Nav.Link>
                        <Nav.Link as={Link} href="/locations" onClick={() => setExpanded(false)}>
                            Locations / Areas
                        </Nav.Link>
                        <Nav.Link as={Link} href="/cuisines" onClick={() => setExpanded(false)}>
                            Cuisines
                        </Nav.Link>
                        <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
                            Vegan Only Restaurants
                        </Nav.Link>
                        <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
                            Blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
