import React from 'react'
import styles from './ItemListContainer.module.css'

const ItemListContainer = ({text}) => {
    return (
        <div>
            <div className={styles.bodytext}>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer