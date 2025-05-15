import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./CuisineCard.module.css";
import { Col } from "react-bootstrap";
import Image from "next/image";

const CuisineCard = ({ cuisine, imageUrl, priority }) => {
    const slug = cuisine.toLowerCase();

    return (
        <Col xs={12} md={6} lg={4} className="mb-4">
            <Link href={`/cuisines/${slug}`} passHref>
                <div className={styles.card}>
                    <Image
                        src={imageUrl}
                        alt={`${cuisine} cuisine`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                        priority={priority}
                    />
                    <span className={styles.text}>{cuisine}</span>
                </div>
            </Link>
        </Col>
    );
};

CuisineCard.propTypes = {
    cuisine: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    priority: PropTypes.bool,
};

export default CuisineCard;
