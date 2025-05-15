import React, { useState } from 'react';
import style from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingrese un correo electrónico válido';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={style.contactContainer}>
            <div className={style.contactForm}>
                <h1 className={style.heading}>Contáctanos</h1>

                {submitSuccess ? (
                    <div className={style.successMessage}>
                        <p>¡Gracias por contactarnos!</p>
                        <p>Nos pondremos en contacto contigo pronto.</p>
                        <button
                            className={style.backButton}
                            onClick={() => setSubmitSuccess(false)}
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={style.formGroup}>
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? style.errorInput : ''}
                                required
                            />
                            {errors.name && <span className={style.errorText}>{errors.name}</span>}
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? style.errorInput : ''}
                                required
                            />
                            {errors.email && <span className={style.errorText}>{errors.email}</span>}
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? style.errorInput : ''}
                                required
                                rows="5"
                            />
                            {errors.message && <span className={style.errorText}>{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className={style.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;