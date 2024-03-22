// import React from 'react'
import cn from "classnames";
import styles from "./porfileHead.module.scss"
import Button from "../UI/button/Button";

import avatar from "../../assets/images/avatar.png"
import profileBG from "../../assets/images/profileBG.png"
import phone from "../../assets/images/phone.svg"
import message from "../../assets/images/message.svg";

export default function PorfileHead() {
    return (
        <div className={cn("main_wrapper", styles.wrapper)}>
            <div className={styles.background}>
                <img src={`${profileBG}`} alt="profileBG" />
            </div>
            <div className={cn(styles.profileInfo, "padding")}>
                <div className={styles.avatar}>
                    <img src={`${avatar}`} alt="avatar" />
                </div>
                <div className={styles.credentials}>Ricardo Cooper</div>
                <div className={styles.buttons}>
                    <Button svg={message}>Message</Button>
                    <Button svg={phone}>Call</Button>
                </div>
            </div>
        </div>
    );
}
