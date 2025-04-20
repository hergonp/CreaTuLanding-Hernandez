// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/" className={styles.button}>Volver al inicio</Link>
        </div>
    );
};

export default NotFound;