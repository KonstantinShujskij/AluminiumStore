import React from 'react'
import styles from '../styles/sections/menu.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/auth.hook'

function Menu({isAuth}) {
    const { logout } = useAuth()

    return (
        <div className="menu">
            <Link className={styles.item} to={'/'}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className={styles.label}>Home</div>
            </Link>
            {isAuth && <>
                <Link className={styles.item} to={'/orders'}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-note-sticky"></i>
                    </div>
                    <div className={styles.label}>Orders</div>
                </Link>
            </>}
            <Link className={styles.item} to={'/basket'}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
                <div className={styles.label}>Basket</div>
            </Link>

            <div className="mt-auto mb-auto"></div>

            {!isAuth && <>
                <Link className={styles.item} to={'/login'}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-key"></i>
                    </div>
                    <div className={styles.label}>Login</div>
                </Link>
                <Link className={styles.item} to={'/signup'}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-user-plus"></i>
                    </div>
                    <div className={styles.label}>Sign Up</div>
                </Link>
            </>}

            {isAuth && <>
                <div className={styles.item} onClick={logout}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-power-off"></i>
                    </div>
                    <div className={styles.label}>Logout</div>
                </div>
                <Link className={styles.item} to={'/account'}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className={styles.label}>Account</div>
                </Link>
            </>}
        </div>
    )
}

export default Menu