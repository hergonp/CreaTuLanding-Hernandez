import React from 'react'
import style from './Item.module.css'
import { Link } from 'react-router'

const Item = ({ item }) => {
    return (
        <div>
            <div className={style.card}>
                <div className={style.card__shine} />
                <div className={style.card__glow} />
                <div className={style.card__content}>
                    <div className={style.card__image}>
                        <img src={item.image} alt="" width={70} height={70} /></div>
                    <div className={style.card__text}>
                        <p className={style.card__title}>{item.title}</p>
                        <p className={style.card__description}>Autor: {item.autor}</p>
                    </div>
                    <div className={style.card__footer}>
                        <div className={style.card__price}>${item.price}</div>
                        <div className={style.card__button}>
                            <Link to={'/item/' + item.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/></svg>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>


            {/* <img src={item.image} alt="" width={200} />
            <h3>{item.title}</h3>
            <h4>Precio: ${item.price}</h4>
            <Link to={'/item/' + item.id}>Ver detalle</Link> */}
        </div>
    )
}

export default Item