import React from 'react'
import styles from '../styles/components/product.module.css'
import { Link } from 'react-router-dom'


function Product(product) {
  return (
    <Link className={styles.product} to={`/product/${product.id}`}>
        <div className={styles.photo}>
            <img src={product.photo} />
        </div>
        
        <div className={styles.title}>{product.title}</div>
    </Link>
  )
}

export default Product