import data from "@/data/restaurants.json";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Container, Row, Col } from "react-bootstrap";
import CuisineCard from "@/components/CuisineCard";

export const metadata = {
    title: "Vegan and Vegetarian Cuisines in Manchester | Manchester Vegan Guide",
    description:
        "Explore a wide range of vegan and vegetarian cuisines in Manchester. From Indian curries and falafel wraps to vegan pizza, dumplings, and desserts, discover the best plant-based food by cuisine.",
    keywords:
        "vegan cuisines Manchester, vegetarian cuisines Manchester, plant-based food Manchester, vegan food by cuisine, vegetarian restaurants by cuisine, Manchester vegan guide, vegan Indian Manchester, vegan Chinese Manchester, vegan pizza Manchester, vegetarian food Manchester",
};

export default function Cuisines() {
    const cuisinesSet = new Set();

    data.forEach((restaurant) => {
        restaurant.cuisine.split(",").forEach((cuisine) => {
            cuisinesSet.add(cuisine.trim());
        });
    });

    const allCuisines = Array.from(cuisinesSet);

    return (
        <Container>
            <h1>All Vegetarian and Vegan Cuisines</h1>
            <p>
                Explore the full variety of vegan and vegetarian cuisines
                available across Manchester. From flavourful Indian curries and
                plant-based Chinese classics to street food, falafel wraps,
                vegan pizza, and indulgent desserts, the city's meat-free food
                scene has something for every taste. Whether you're craving
                Lebanese mezze, Sicilian pasta, Pan-Asian dumplings, or
                American-style vegan burgers and fries, this guide helps you
                find the best vegetarian and vegan restaurants in Manchester by
                cuisine. Browse all categories below to discover your next
                plant-powered meal.
            </p>
            {/*<Link href={`/cuisines/${slugify(cuisine)}`}>
                            {cuisine}
                        </Link>*/}
            <Row>
                {allCuisines.map((cuisine) => (
                    
                        
                        <CuisineCard key={cuisine} cuisine={cuisine} imageUrl={`/images/cuisines/${slugify(cuisine)}.webp`} />
                    
                ))}
            </Row>
        </Container>
    );
}
