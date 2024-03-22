// import React from 'react'
import styles from "./card.module.scss"

export default function Card({ children, img, onclick }) {
    return (
        <div onClick={onclick} className={styles.wrapper}>
            <div className={styles.image}>
                <img src={`${img}`} alt="" />
            </div>
            <h1 className={styles.title}>id: {children}</h1>
        </div>
    );
}
