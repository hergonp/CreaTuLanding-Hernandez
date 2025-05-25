import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { useParams } from 'react-router'
import { getProductById } from '../services/firebaseServices'
import Counter from '../components/Counter'
import Loader from '../components/Loader'
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [counter, setCounter] = useState(0)
    const { cart, setCart, loading, setLoading } = useGlobalStates()
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(id).then(res => {
            setDetail(res)
            setLoading(false)
        })
    }, [])

    const addToCart = () => {
        setCart([...cart, { ...detail, quantity: counter }])
    }

    return (

        <div className={styles.bookDetailContainer}>
            {loading ? (<Loader />) : (
                <div className={styles.bookContent}>
                    <div className={styles.bookImageContainer}>
                        <img
                            src={detail.image}
                            alt={detail.title}
                            className={styles.bookImage}
                            onError={(e) => {
                                e.target.src = '/book-placeholder.jpg';
                            }}
                        />
                        {detail.discount && (
                            <span className={styles.discountBadge}>-{detail.discount}%</span>
                        )}
                    </div>

                    <div className={styles.bookInfo}>
                        <h1 className={styles.bookTitle}>{detail.title}</h1>
                        <p className={styles.bookAuthor}>por {detail.autor || "Autor desconocido"}</p>

                        <div className={styles.priceContainer}>
                            <span className={styles.bookPrice}>${detail.price}</span>
                        </div>

                        <div className={styles.bookMeta}>
                            <span><strong>Género:</strong> {detail.category || "No especificado"}</span>
                            <span><strong>Editorial:</strong> {detail.publisher || "No especificada"}</span>
                            <span><strong>Año:</strong> {detail.year || "No especificado"}</span>
                            <span><strong>ISBN:</strong> {detail.isbn || "No disponible"}</span>
                        </div>

                        <div className={styles.stockContainer}>
                            <span className={detail.stock > 0 ? styles.inStock : styles.outOfStock}>
                                {detail.stock > 0 ? `Disponible (${detail.stock} unidades)` : "Agotado"}
                            </span>
                        </div>

                        <div className={styles.counterContainer}>
                            <Counter
                                stock={detail.stock}
                                counter={counter}
                                setCounter={setCounter}
                            />
                            <button
                                onClick={addToCart}
                                disabled={counter === 0 || detail.stock === 0}
                                className={styles.addToCartButton}
                            >
                                {counter === 0 ? "Selecciona cantidad" : "Añadir al carrito"}
                            </button>
                        </div>

                        <div className={styles.bookDescription}>
                            <h3>Descripción</h3>
                            <p>{detail.description || "No hay descripción disponible."}</p>
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default ItemDetailContainer