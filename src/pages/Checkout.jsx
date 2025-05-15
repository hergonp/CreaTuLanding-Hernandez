import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { useNavigate } from 'react-router'
import { createOrder } from '../services/firebaseServices'
import styles from './Checkout.module.css'
import Swal from 'sweetalert2'

const Checkout = () => {
    const { cart, calcularTotal } = useGlobalStates()
    const [user, setUser] = useState({
        name: '',
        email: '',
        tel: ''
    })

    const navigate = useNavigate()
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/')
        }
    }, [])
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        let hasError = false
        let newOrder = {
            buyer: user,
            total: calcularTotal,
            item: cart,
            date: new Date()
        }
        if (user.name.length < 5) {
            hasError = true
        }
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!regexEmail.test(user.email)) {
            hasError = true
        }
        if (user.tel.length !== 9) {
            hasError = true
        }
        if (hasError) {
            Swal.fire({
                icon: 'error',
                title: 'Datos inválidos',
                text: 'Datos ingresados no válidos'
            })
            return
        }
        createOrder(newOrder).then(res => {
            Swal.fire({
                title: '¡Compra realizada!',
                icon: 'success',
                text: `Gracias por tu compra. Tu orden de compra es: ${res.id}`
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
    <div className={styles.container}>
        <h2 className={styles.title}>Finalizar Compra</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    className={`${styles.input} ${user.name.length > 0 && user.name.length < 5 ? styles.inputError : ''}`}
                />
                {user.name.length > 0 && user.name.length < 5 && (
                    <span className={styles.error}>El nombre debe tener al menos 5 caracteres</span>
                )}
            </div>
            
            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    className={`${styles.input} ${user.email.length > 0 && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email) ? styles.inputError : ''}`}
                />
                {user.email.length > 0 && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email) && (
                    <span className={styles.error}>Ingrese un email válido</span>
                )}
            </div>
            
            <div className={styles.formGroup}>
                <label htmlFor="tel" className={styles.label}>Teléfono</label>
                <input 
                    type="text" 
                    name="tel" 
                    onChange={handleChange} 
                    className={`${styles.input} ${user.tel.length > 0 && user.tel.length !== 9 ? styles.inputError : ''}`}
                />
                {user.tel.length > 0 && user.tel.length !== 9 && (
                    <span className={styles.error}>El teléfono debe tener 9 dígitos</span>
                )}
            </div>
            
            <button type="submit" className={styles.button}>Enviar</button>
        </form>
    </div>
)
}

export default Checkout