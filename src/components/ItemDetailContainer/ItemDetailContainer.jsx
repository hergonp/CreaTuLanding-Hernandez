import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../services/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (err) {
                setError("Producto no encontrado");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            {<ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;