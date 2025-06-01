import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import CardBody from "react-bootstrap/CardBody";
import CardFooter from "react-bootstrap/CardFooter";

import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({
    name,
    slug,
    restType,
    location,
    mapembed,
    cuisine,
}) => {
    const cuisineArray = cuisine.split(",").map((c) => c.trim());

    return (
        <Link href={`/restaurants/${slug}`}>
            <Card className={`my-3 ${styles.RestCard}`}>
                <CardHeader className={`text-center px-1`}>
                    <p className={`m-0 p-0 ${styles.RestName}`}>{name}</p>
                </CardHeader>
                <CardBody className={``}>
                    <p className={`m-0 ${styles.RestDetails}`}>
                        {restType} restaurant in {location}
                    </p>
                    <p className={`m-0 ${styles.RestDetails}`}>
                        Serving:
                    </p>
                    <p className={`m-0 ${styles.CuisineWrapper}`}>
                        {cuisineArray.map((c, index) => (
                            <span key={index} className={styles.CuisineTag}>
                                {c}{" "}
                            </span>
                        ))}
                    </p>
                </CardBody>
                <CardFooter className="text-center p-0">
                    <p className={`my-1 ${styles.CTA}`}>
                        Read More{" "}
                        <i className="bi bi-hand-index-thumb"></i>
                    </p>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default RestaurantCard;
