import { Container, Row, Col } from "react-bootstrap";
import heroStyles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Container fluid="lg">
            <Row className={`${heroStyles.HeroMainImage} p-0 mb-3`}>
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
                    <p className={heroStyles.HeroText}>
                        Manchester Vegan Guide
                    </p>
                    <h1 className={heroStyles.HeroDescription}>
                        Vegan & Vegetarian Restaurants in Manchester
                    </h1>
                </Col>
            </Row>
            <Row className="my-1">
                <Col xs={12} md={8}>
                    <h2 className="my-4 text-center">
                        Explore the best vegan and vegetarian food in
                        Manchester.
                    </h2>
                    <p>
                        Looking for where to eat vegan in Manchester? Or curious
                        about the buzzing Manchester vegan food scene? From
                        hearty Italian vegan pizzas to flavour-packed Pan-Asian
                        vegetarian cuisine, discover all of Manchester&apos;s top
                        vegan and vegetarian-friendly restaurants in one place.
                        <br />
                        <br />
                        With a diverse selection of meat-free meals created by
                        passionate plant-based food lovers, you&apos;ll find the best
                        vegan and vegetarian food Manchester has to offer—and
                        maybe even your next favourite spot. <br />
                        <br />
                        Whether you&apos;re a long-time vegan, vegetarian, or just
                        exploring plant-based dining in Manchester, this guide
                        makes it easy to discover great spots to eat. From
                        casual cafés to upscale vegetarian restaurants, we&apos;ve
                        got Manchester&apos;s meat-free scene covered.
                    </p>
                </Col>
                <Col xs={12} md={4} className="my-2">
                    <Image
                        src="/images/MVG-logo.webp"
                        alt="Two books on a green table, one above the other, both with the Manchester Vegan Guide logo on the front."
                        width={980}
                        height={1472}
                        className={heroStyles.HeroImage}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Col>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link href="/cuisines" className={heroStyles.HeroLink}>
                        Check out our list of vegan and vegetarian restaurant
                        cuisines in Manchester
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className="my-2">
                    <Image
                        src="/images/manchester-bee.webp"
                        alt="A sculpture of a Manchester bee sat on top of an egg shaped globe with bees drawn on the globe."
                        width={920}
                        height={1227}
                        className={heroStyles.HeroImage}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Col>
                <Col xs={12} md={8}>
                    <h2 className="my-4 text-center">
                        Top Vegan & Vegetarian Restaurants in Manchester
                    </h2>
                    <p>
                        Discover some of the best vegan and vegetarian
                        restaurants Manchester has to offer. Whether you&apos;re
                        searching for creative vegan street food, flavourful
                        vegetarian curries, or plant-based fine dining, these
                        top-rated spots highlight the vibrant meat-free food
                        scene across the city.
                    </p>
                    <p>
                        From the Northern Quarter to Withington, these featured
                        restaurants serve up some of the most popular vegan and
                        vegetarian meals in Manchester—perfect for locals and
                        visitors looking for great food without compromise.
                        Explore our curated picks below to find your next
                        plant-powered favourite.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link
                        href="/locations"
                        className={`${heroStyles.HeroLink}`}>
                        Find vegan and vegetarian restaurants in Manchester City
                        Center and Greater Manchester
                    </Link>
                </Col>
                <Col xs={12} md={8}>
                    <h2 className="my-4 text-center">
                        Why Manchester is a Great City for Plant-Based Dining
                    </h2>
                    <p>
                        Manchester has become one of the UK&apos;s leading cities for
                        plant-based and vegetarian dining, offering an
                        impressive variety of vegan-friendly restaurants, cafés,
                        and street food spots. Whether you&apos;re a long-time vegan,
                        a health-conscious vegetarian, or simply curious about
                        trying meat-free meals, Manchester delivers an exciting
                        and inclusive food scene for everyone.
                    </p>
                    <p>
                        From independent vegetarian eateries in the Northern
                        Quarter to vegan-friendly gastropubs in Glossop and
                        plant-based Italian cafés in Urmston, there&apos;s no
                        shortage of creative veggie cuisine to explore. The
                        city&apos;s diverse culinary culture has embraced everything
                        from vegan burgers and loaded fries to fully raw vegan
                        tasting menus and globally inspired vegetarian dishes.
                    </p>
                    <p>
                        One of the reasons Manchester stands out for vegan and
                        vegetarian food is the strong sense of community around
                        conscious eating and sustainable living. Local chefs and
                        restaurant owners are passionate about using fresh,
                        locally sourced ingredients to craft delicious,
                        nutritious meals that cater to all dietary
                        needs—including gluten-free, dairy-free, and fully
                        plant-based options.
                    </p>
                    <p>
                        Manchester also regularly hosts vegan food festivals,
                        pop-ups, and markets, making it an exciting destination
                        for foodies and plant-based travellers alike. Whether
                        you&apos;re in the heart of the city or exploring the
                        suburbs, you&apos;re never far from a high-quality vegan or
                        vegetarian dining experience.
                    </p>
                    <p>
                        With its rich food culture, innovative chefs, and
                        commitment to sustainability, Manchester continues to
                        grow as a hotspot for some of the best vegan and
                        vegetarian food in the UK. It&apos;s never been easier—or
                        tastier—to enjoy plant-based dining in Manchester.
                    </p>
                </Col>
                <Col xs={12} md={4} className="my-2">
                    <Image
                        src="/images/manchester-signs.webp"
                        alt="Public directional signs on Tib Street, Manchester."
                        width={841}
                        height={1120}
                        className={heroStyles.HeroImage}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
        </Container>
    );
}
