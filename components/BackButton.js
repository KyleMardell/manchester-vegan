import React from "react";
import Link from "next/link";
import styles from "./BackButton.module.css";

const BackButton = ({ url, buttonText }) => {
    return (
        <Link href={url} className={`btn btn-primary ${styles.BackButton}`}>
            {buttonText}
        </Link>
    );
};

export default BackButton;
