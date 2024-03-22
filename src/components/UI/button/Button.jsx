// import React from 'react'
import cn from "classnames";
import styles from "./button.module.scss"

export default function Button({ svg, children, type, color }) {
    return (
        <button type={`${type}`} className={cn(styles.wrapper, styles[color])}>
            {svg && <img src={`${svg}`} alt="" />}
            <p>{children}</p>
        </button>
    );
}
