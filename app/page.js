import { Container, Row, Col } from "react-bootstrap";
import heroStyles from "./hero.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <Container fluid="lg">
            <Row className={heroStyles.hero}>
                <Col>
                    <h1>Vegan & Vegetarian Restaurants in Manchester</h1>
                </Col>
            </Row>
            <Row className="my-2">
                <Col xs={8}>
                    <h2>
                        Explore the best vegan and vegetarian food in
                        Manchester.
                    </h2>
                    <p>
                        Looking for where to eat vegan in Manchester? Or curious
                        about the buzzing Manchester vegan food scene? From
                        hearty Italian vegan pizzas to flavour-packed Pan-Asian
                        vegetarian cuisine, discover all of Manchester's top
                        vegan and vegetarian-friendly restaurants in one place.
                    </p>
                    <p>
                        With a diverse selection of meat-free meals created by
                        passionate plant-based food lovers, you'll find the best
                        vegan and vegetarian food Manchester has to offer—and
                        maybe even your next favourite spot. Whether you're a
                        long-time vegan, vegetarian, or just exploring
                        plant-based dining in Manchester, this guide makes it
                        easy to discover great spots to eat. From casual cafés
                        to upscale vegetarian restaurants, we've got
                        Manchester's meat-free scene covered.
                    </p>
                </Col>
                <Col xs={4}>
                    <Image
                        src="/images/vegan-food1.webp"
                        alt="Manchester Vegan Guide text over a portrait showing a table of fruit with a view of farmers fields in the background."
                        width={3920}
                        height={5928}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Top Vegan & Vegetarian Restaurants in Manchester</h2>
                    <p>
                        Discover some of the best vegan and vegetarian
                        restaurants Manchester has to offer. Whether you're
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
                <Col>
                    <h2>Browse Vegan & Vegetarian Restaurants by Area</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        Why Manchester is a Great City for Plant-Based Dining
                    </h2>
                    <p>
                        Manchester has become one of the UK's leading cities for
                        plant-based and vegetarian dining, offering an
                        impressive variety of vegan-friendly restaurants, cafés,
                        and street food spots. Whether you're a long-time vegan,
                        a health-conscious vegetarian, or simply curious about
                        trying meat-free meals, Manchester delivers an exciting
                        and inclusive food scene for everyone.
                    </p>
                    <p>
                        From independent vegetarian eateries in the Northern
                        Quarter to vegan-friendly gastropubs in Glossop and
                        plant-based Italian cafés in Urmston, there's no
                        shortage of creative veggie cuisine to explore. The
                        city's diverse culinary culture has embraced everything
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
                        you're in the heart of the city or exploring the
                        suburbs, you're never far from a high-quality vegan or
                        vegetarian dining experience.
                    </p>
                    <p>
                        With its rich food culture, innovative chefs, and
                        commitment to sustainability, Manchester continues to
                        grow as a hotspot for some of the best vegan and
                        vegetarian food in the UK. It's never been easier—or
                        tastier—to enjoy plant-based dining in Manchester.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
