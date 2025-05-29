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
                        Check Out All the Vegan & Vegetarian Restaurants in Manchester
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
                        Searching for vegan and vegetarian restaurants in
                        Manchester or keen to explore the growing plant-based
                        food scene across the city? From proper Italian style
                        vegan pizzas to bold, flavourful Pan-Asian vegetarian
                        dishes, this guide brings together some of the best
                        places to eat meat-free in Manchester.
                        <br />
                        <br />
                        With a wide range of options, these vegan and vegetarian
                        restaurants in Manchester are run by people who care
                        about good food and doing it right. Whether it&apos;s
                        fully plant-based or just offering solid vegetarian
                        choices, this is where to find some of the best vegan
                        and vegetarian food Manchester has to offer. <br />
                        <br />
                        For anyone choosing to eat less meat, sticking to a
                        plant-based diet, or just after something different,
                        this guide makes it easy to find quality vegan and
                        vegetarian restaurants in Manchester. From laid-back
                        cafés to more refined vegetarian dining, these spots are
                        part of what makes Manchester a great place for
                        meat-free meals.
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
                        Explore some of the top vegan and vegetarian restaurants
                        in Manchester. Whether it&apos;s creative vegan street
                        food, rich and spicy vegan curries, or plant-based
                        dishes with a fine dining touch, these standout spots
                        reflect the city's strong and growing meat-free food
                        scene.
                    </p>
                    <p>
                        Across areas like the Northern Quarter, Chorlton, and
                        Withington, vegan and vegetarian restaurants in
                        Manchester are serving well-made, flavourful meals that
                        show how good plant-based food can be. These picks
                        include some of the most talked-about vegan and
                        vegetarian meals in Manchester. Browse the list below to
                        find a new favourite.
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
                        Manchester has become one of the top UK cities for vegan
                        and vegetarian dining, with a strong mix of plant-based
                        restaurants, cafés, and street food vendors. For anyone
                        following a vegan or vegetarian diet—or just looking to
                        eat less meat—there&apos;s a lot to explore. The city is
                        home to many of the most popular vegan and vegetarian
                        restaurants in Manchester, with options that suit all
                        tastes and budgets.
                    </p>
                    <p>
                        From independent vegetarian spots in the Northern
                        Quarter to vegan-friendly pubs in Glossop and
                        plant-based Italian cafés in Urmston, the variety of
                        meat-free food on offer is impressive. Manchester&apos;s
                        diverse food culture has made room for everything from
                        loaded vegan burgers and creative street food to raw
                        vegan menus and globally inspired vegetarian dishes.
                    </p>
                    <p>
                        What sets Manchester apart for vegan and vegetarian food
                        is the strong local focus on sustainability and
                        conscious eating. Many restaurants and cafés source
                        ingredients locally and create menus that cater to a
                        wide range of dietary needs, including gluten-free,
                        dairy-free, and fully plant-based options.
                    </p>
                    <p>
                        The city also hosts regular vegan food festivals, street
                        markets, and pop-up events that celebrate plant-based
                        living. Whether in the city centre or further out,
                        it&apos;s easy to find well-made vegan and vegetarian
                        food throughout Manchester.
                    </p>
                    <p>
                        With a strong food scene, creative chefs, and an obvious
                        commitment to quality, Manchester stands out as one of
                        the best places in the UK for vegan and vegetarian
                        restaurants. Plant-based dining in Manchester is only
                        growing, and it&apos;s clear why so many people are
                        choosing to eat this way across the city.
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
