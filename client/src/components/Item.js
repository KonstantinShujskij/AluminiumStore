import React from 'react'
import styles from '../styles/components/item.module.css'
import { Link } from 'react-router-dom'


function Item({item}) {
  return (
    <Link className={styles.item} to={`/item/${item._id}`}>
        <div className={styles.photo}>
            <img src={item.photo} />
        </div>
        
        <div className={styles.title}>{item.title}</div>
        <div className={styles.title}>{item.desc}</div>
    </Link>
  )
}

export default Item