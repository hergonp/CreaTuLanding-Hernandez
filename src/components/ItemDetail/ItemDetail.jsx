import React from 'react';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ product }) => {
    return (
        <div className={styles.detailContainer}>
            <div className={styles.imageGallery}>
                <div className={styles.mainImage}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.productImage}
                        loading="lazy"
                    />
                </div>
            </div>

            <div className={styles.productInfo}>
                <h1 className={styles.title}>{product.title}</h1>

                <div className={styles.priceSection}>
                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                    {product.rating && (
                        <div className={styles.rating}>
                            ⭐ {product.rating.rate} ({product.rating.count} reseñas)
                        </div>
                    )}
                </div>

                <div className={styles.meta}>
                    <span className={styles.category}>{product.category}</span>
                    <span className={styles.stock}>Disponible: {Math.floor(Math.random() * 50) + 1} unidades</span> {/* Simulamos stock */}
                </div>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.actions}>
                    <button className={styles.addToCart}>Añadir al carrito</button>
                    <button className={styles.buyNow}>Comprar ahora</button>
                </div>

                <div className={styles.additionalInfo}>
                    <h3>Características</h3>
                    <ul>
                        <li>Envío gratuito en pedidos superiores a $50</li>
                        <li>Devoluciones gratuitas hasta 30 días</li>
                        <li>Garantía del fabricante</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;