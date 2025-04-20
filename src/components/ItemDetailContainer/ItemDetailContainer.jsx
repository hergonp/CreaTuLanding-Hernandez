import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../../services/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!id) throw new Error('No se proporcionó ID de producto');

                const data = await getProductById(id);

                if (!data) throw new Error('Producto no encontrado');
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } 
        };

        fetchProduct();
    }, [id]);

    if (error) return <div className={styles.error}>{error}</div>;
    if (!product) return <div className={styles.notFound}>Producto no disponible</div>;

    return (
        <div className={styles.detailContainer}>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;