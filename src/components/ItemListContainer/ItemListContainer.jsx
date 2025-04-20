import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProducts, getProductsByCategory } from '../../services/products';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = categoryId
                    ? await getProductsByCategory(categoryId)
                    : await getProducts();
                setProducts(data);
            } catch (err) {
                setError("Error al cargar los productos");
            }
        };
        fetchProducts();
    }, [categoryId]);

    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;