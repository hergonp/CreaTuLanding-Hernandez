import React from 'react';
import { Link } from 'react-router';
import CartWidget from './CartWidget';
import styles from './NavBar.module.css';

const NavBar = () => {
    

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <Link to="/" className={styles.logo} aria-label="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.083 2.5c-11.874 0-21.5 9.626-21.5 21.5s9.626 21.5 21.5 21.5a21.5 21.5 0 0 0 6.59-1.08q-.793.095-1.59.125c-10.493 0-19-8.507-19-19s8.507-19 19-19a19 19 0 0 1 11.936 4.219A21.5 21.5 0 0 0 25.083 2.5" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.956 10.797a16 16 0 0 0-9.873 14.748c0 8.837 7.163 16 16 16a16 16 0 0 0 14.334-8.95a15 15 0 0 1-10.875 4.716c-8.284 0-15-6.716-15-15a15 15 0 0 1 5.414-11.514" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.147 17.356c.822 2.736 1.343 2.68 4 2.906c-2.348 1.627-2.134 2.105-1.528 4.702c-2.273-1.73-2.661-1.379-4.944 0c.943-2.696.489-2.957-1.528-4.702c2.856.064 2.964-.449 4-2.906" stroke-width="1"/></svg>
                    </Link>
                    <span>Lumi</span>
                </Link>

                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><Link to="/">Inicio</Link></li>
                    <li className={styles.navLink}><Link to="/category/Poesia">Poesia</Link></li>
                    <li className={styles.navLink}><Link to="/category/Juvenil">Literatura Juvenil</Link></li>
                    <li className={styles.navLink}><Link to="/category/Comics">Comic y Manga</Link></li>
                    <li className={styles.navLink}><Link to="/contact">Contacto</Link></li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;