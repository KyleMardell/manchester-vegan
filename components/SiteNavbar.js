"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useClickOutsideToggle from "@/hooks/useClickOutsideToggle";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./SiteNavBar.module.css";

export default function SiteNavbar() {
    const pathname = usePathname();
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    return (
        <Navbar
            expanded={expanded}
            expand="lg"
            className="bg-body-tertiary"
            ref={ref}>
            <Container>
                <Navbar.Brand
                    as={Link}
                    href="/"
                    className={`${styles.LogoText}`}>
                    Manchester Vegan Guide
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            href="/"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/" ? styles.ActiveNavLink : ""}`}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/restaurants"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/restaurants" ? styles.ActiveNavLink : ""}`}>
                            All Restaurants
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/cuisines/vegan-only"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/cuisines/vegan-only" ? styles.ActiveNavLink : ""}`}>
                            100% Vegan Restaurants
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/cuisines"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/cuisines" ? styles.ActiveNavLink : ""}`}>
                            Cuisines
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/locations"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/locations" ? styles.ActiveNavLink : ""}`}>
                            Locations / Areas
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/cookbooks"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/cookbooks" ? styles.ActiveNavLink : ""}`}>
                            Cookbooks
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/articles"
                            onClick={() => setExpanded(false)}
                            className={`${styles.NavText} ${pathname === "/articles" ? styles.ActiveNavLink : ""}`}>
                            Articles
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
