// pages/Home.jsx
import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.hero}>
            <h1>Bienvenido a ThiStore</h1>
        </section>
    );
};

export default Home;