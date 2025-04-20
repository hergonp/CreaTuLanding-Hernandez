import React from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    return (
        <main className={styles.productDetailPage}>
            <div className={styles.container}>
                <ItemDetailContainer />
            </div>
        </main>
    );
};

export default ProductDetail;