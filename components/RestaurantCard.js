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
            <Card className={`my-3 ${styles.RestCard}`}>
                <CardHeader className={`text-center`}><h3 className={`m-0 ${styles.RestName}`}>{name}</h3></CardHeader>
                <CardBody className={`text-center`}>
                    <p className={`m-0 ${styles.RestDetails}`}>{restType} restaurant in {location}</p>
                    <p className={`m-0`}>Serving {cuisine} cuisines</p>
                    <p className={`m-0 ${styles.CTA}`}>Click for more info</p>
                </CardBody>
                <CardFooter className="text-center p-0">
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
