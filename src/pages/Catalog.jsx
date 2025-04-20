
// pages/Category.jsx
import React from 'react';
import { useParams } from 'react-router';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Category = () => {
    const { categoryId } = useParams();

    const formatCategory = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <main>
            <h1>Catálogo</h1>
            <ItemListContainer />
        </main>
    );
};

export default Category;