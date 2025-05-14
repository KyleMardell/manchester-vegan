import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./CuisineCard.module.css";
import { Col } from "react-bootstrap";

const CuisineCard = ({ cuisine, imageUrl }) => {
    return (
        <Col xs={12} md={6} lg={4} className="mb-4">
            <Link href={`/cuisines/${cuisine.toLowerCase()}`} passHref>
                <div
                    className={styles.card}
                    style={{ backgroundImage: `url(${imageUrl})` }}>
                    {cuisine}
                </div>
            </Link>
        </Col>
    );
};

CuisineCard.propTypes = {
    cuisine: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default CuisineCard;
