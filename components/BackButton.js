import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./BackButton.module.css";

const BackButton = ({ url, buttonText }) => {
    return (
        <Link href={url} passHref>
            <Button className={styles.BackButton}>
                {buttonText}
            </Button>
        </Link>
    );
};

export default BackButton;