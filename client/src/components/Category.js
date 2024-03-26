import React from 'react'
import styles from '../styles/components/category.module.css'
import { Link } from 'react-router-dom'


function Category(category) {
  return (
    <Link className={styles.product} to={`/category/${category.id}`}>
        <div className={styles.photo}>
            <img src="" />
        </div>
        
        <div className={styles.title}>{category.title}</div>
        <div className={styles.desc}>{category.desc}</div>
    </Link>
  )
}

export default Category