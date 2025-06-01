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
                    alt="The Manchester skyline, home to many vegan and vegetarian restaurants"
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
                    <h1 className={heroStyles.HeroText}>
                        Manchester Vegan Guide
                    </h1>
                    <h2 className={heroStyles.HeroDescription}>
                        Vegan & Vegetarian Restaurants in Manchester
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link href="/restaurants" className={heroStyles.HeroLink}>
                        Check Out All the Vegan & Vegetarian Restaurants in
                        Manchester
                    </Link>
                </Col>
            </Row>
            <Row className="my-1">
                <Col xs={12} md={8}>
                    <h2 className="my-4 text-center">
                        Explore the best vegan and vegetarian restaurants in
                        Manchester.
                    </h2>
                    <p>
                        Looking for a decent vegan or vegetarian bite to eat in
                        Manchester? This city&apos;s packed with spots serving
                        up proper good plant-based food, from wood-fired vegan
                        pizzas done the Italian way, to bold and colourful
                        Pan-Asian veggie dishes bursting with flavour.
                        <br />
                        <br />
                        There&apos;s no shortage of choice either. Loads of
                        these places are run by people who genuinely care about
                        what they&apos;re cooking, fresh ingredients, bold
                        flavours, and food that actually fills you up. Whether
                        it&apos;s a fully vegan joint or somewhere with strong
                        veggie options, these are some of the best meat-free
                        eats around Manchester.
                        <br />
                        <br />
                        Perfect for anyone cutting down on meat, living
                        plant-based, or just fancying something a bit different.
                        From chilled-out cafés to more upmarket places, these
                        restaurants are a solid part of Manchester&apos;s
                        buzzing food scene.
                    </p>
                </Col>
                <Col xs={12} md={4} className="my-2">
                    <Image
                        src="/images/MVG-logo.webp"
                        alt="Two books on a green table, one above the other, both with the Manchester Vegan Guide logo on the front."
                        width={1024}
                        height={1024}
                        className={heroStyles.HeroImage}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Col>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link href="/cuisines" className={heroStyles.HeroLink}>
                        Explore our curated list of vegan and vegetarian
                        restaurants in Manchester by cuisine
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
                        Time to explore some of Manchester&apos;s top vegan and
                        vegetarian spots. Whether it&apos;s inventive street
                        food packed with flavour, rich and spicy plant-based
                        curries, or dishes with a bit of a fine dining twist,
                        these places are a proper reflection of how strong the
                        city&apos;s meat-free scene has become.
                    </p>
                    <p>
                        From the Northern Quarter to Chorlton and Withington,
                        there are restaurants cooking up plates that are
                        anything but boring — fresh, exciting, and made with
                        care. These picks have been making waves for all the
                        right reasons, serving up some of the most talked-about
                        vegan and veggie meals in town.
                        <br />
                        <br />
                        Have a scroll through and discover a new favourite —
                        there&apos;s something here for every kind of
                        plant-based craving.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link
                        href="/locations"
                        className={`${heroStyles.HeroLink}`}>
                        Find top-rated vegan and vegetarian restaurants in
                        Manchester City Centre and Greater Manchester
                    </Link>
                </Col>
                <Col xs={12} md={8}>
                    <h2 className="my-4 text-center">
                        Why Manchester is a Great City for Plant-Based Dining
                    </h2>
                    <p>
                        Manchester&apos;s quickly earned a reputation as one of
                        the best places in the UK for vegan and vegetarian food.
                        The city&apos;s packed with a proper mix of plant-based
                        restaurants, cosy cafés, and street food stalls —
                        perfect for anyone eating veggie, going fully vegan, or
                        just cutting back on meat. There&apos;s something here
                        for every taste and budget.
                    </p>
                    <p>
                        In the Northern Quarter, you&apos;ll find indie veggie
                        spots with loads of character, while over in places like
                        Glossop and Urmston, there are pubs and cafés dishing
                        out brilliant plant-based meals, from hearty Italian
                        plates to full-on vegan roasts. Manchester&apos;s food
                        scene is properly diverse, and that shines through in
                        the menus — think stacked vegan burgers, creative street
                        food, raw dishes, and globally inspired flavours all
                        over the place.
                    </p>
                    <p>
                        What really makes Manchester stand out is how many of
                        these places care about where their food comes from.
                        Loads of them source ingredients locally, keep things
                        sustainable, and offer menus that work for all kinds of
                        diets — gluten-free, dairy-free, and fully plant-based
                        included.
                    </p>
                    <p>
                        There&apos;s also no shortage of events celebrating the
                        plant-based lifestyle. Vegan food fests, buzzing street
                        markets, and one-off pop-ups are regular features, and
                        they&apos;re a great way to try something new or find a
                        new go-to.
                    </p>
                    <p>
                        With passionate chefs, a community that supports
                        conscious eating, and a proper buzz around the whole
                        scene, it&apos;s easy to see why Manchester&apos;s
                        become a top spot for vegan and veggie dining. And
                        it&apos;s only getting better.
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
            <Row>
                <Col xs={12} className="text-center p-3 my-4">
                    <Link href="/cookbooks" className={heroStyles.HeroLink}>
                        Get Our FREE Vegan Meal Prep Cookbook
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
