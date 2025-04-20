import React from 'react';
import { Link } from 'react-router';
import styles from './Item.module.css';

const Item = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt={product.title} loading="lazy" />
            </div>
            <div className={styles.info}>
                <h3>{product.title}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <p className={styles.category}>{product.category}</p>
                <Link to={`/product/${product.id}`} className={styles.button}>
                    Ver detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;