import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import CardBody from "react-bootstrap/CardBody";
import CardFooter from "react-bootstrap/CardFooter";

import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({ name, slug, restType, location, mapembed, cuisine }) => {
    return (
        <Link href={`/restaurants/${slug}`}>
            <Card className="my-3">
                <CardHeader className={`text-center`}><h3 className={`m-0 ${styles.RestName}`}>{name}</h3></CardHeader>
                <CardBody className={`text-center ${styles.RestDetails}`}>
                    <p className="m-0">{restType} restaurant in {location}</p>
                    <p className="m-0">Serving {cuisine} cuisines.</p>
                </CardBody>
                <CardFooter className="text-center">
                    <iframe
                        width="100%"
                        height="auto"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={mapembed}></iframe>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default RestaurantCard;
