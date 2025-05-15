import React from 'react';
import { useGlobalStates } from '../context/Context';
import { Link } from 'react-router';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, calcularTotal } = useGlobalStates();
    
    return (
        <div className={styles.container}>
            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <h1>Ups! El carrito de compras se encuentra vacío</h1>
                    <Link to="/" className={styles.continueShopping}>Seguir comprando</Link>
                </div>
            ) : (
                <div className={styles.masterContainer}>
                    <div className={`${styles.card} ${styles.cart}`}>
                        <h2 className={styles.title}>Tu carrito</h2>
                        <div className={styles.products}>
                            {cart.map(prod => (
                                <div className={styles.product} key={prod.id}>
                                    <div className={styles.productInfo}>
                                        <img src={prod.image} alt="" width={60} height={60} />
                                        <span className={styles.productTitle}>{prod.title}</span>
                                        <span className={styles.productPrice}>${prod.price}</span>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button className={styles.quantityBtn}>
                                            <svg fill="none" viewBox="0 0 24 24" height={14} width={14}>
                                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12" />
                                            </svg>
                                        </button>
                                        <span className={styles.quantity}>{prod.quantity}</span>
                                        <button className={styles.quantityBtn}>
                                            <svg fill="none" viewBox="0 0 24 24" height={14} width={14}>
                                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4" />
                                            </svg>
                                        </button>
                                    </div>
                                    <span className={styles.subtotal}>${(prod.price * prod.quantity)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.coupons}`}>
                        <h2 className={styles.title}>Aplicar cupones</h2>
                        <form className={styles.couponForm}>
                            <input 
                                type="text" 
                                placeholder="Aplica tus cupones aquí" 
                                className={styles.inputField} 
                            />
                            <button type="button" className={styles.applyBtn}>Aplicar</button>
                        </form>
                    </div>

                    <div className={`${styles.card} ${styles.checkout}`}>
                        <h2 className={styles.title}>Resumen</h2>
                        <div className={styles.summaryDetails}>
                            <div className={styles.summaryRow}>
                                <span>Subtotal:</span>
                                <span>${calcularTotal}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Descuentos:</span>
                                <span>$0</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.total}`}>
                                <span>Total:</span>
                                <span className={styles.totalPrice}>${calcularTotal}</span>
                            </div>
                        </div>
                        <Link to="/checkout" className={styles.checkoutBtn}>Ir al checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;