import React from 'react'
import { useParams } from 'react-router'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Category = () => {
    const { categoryId } = useParams()

    const formatCategoryName = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (
        <section className="category-page">
            <h1 className="page-title">{formatCategoryName(categoryId)}</h1>
            <ItemListContainer greeting={`Productos de ${formatCategoryName(categoryId)}`} />
        </section>
    )
}

export default Category