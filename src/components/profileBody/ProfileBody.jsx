import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../UI/card/Card";
import styles from "./profileBody.module.scss";
import cn from "classnames";
import ModalOnPosts from "../modalOnPosts/ModalOnPosts";

export default function ProfileBody({ img, title }) {
    const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false)
    const [selectedId, setSelectedId] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        axios
            .get("http://test-backend.itdelta.agency/api/images")
            .then((response) => {
                setData(response?.data);
                console.log("data", response?.data);
            })
            .catch((error) => {
                console.error("error:", error);
            });
    }, []);
  
   useEffect(() => {
       const handleOutsideClick = (event) => {
           if (modalRef.current && !modalRef.current.contains(event.target)) {
               setOpen(false);
           }
       };
       document.addEventListener("mousedown", handleOutsideClick);
       return () => {
           document.removeEventListener("mousedown", handleOutsideClick);
       };
   }, [open]);
  

    const handleCardClick = (id) => {
        setSelectedId(id);
        setOpen(true);
    };

    return (
        <>
            <div className={cn("main_wrapper", styles.wrapper)}>
                {data.map((item) => (
                    <Card key={item.id} img={item.image} onclick={() => handleCardClick(item.id)}>
                        {item.id}
                    </Card>
                ))}
            </div>
            {open && <ModalOnPosts id={selectedId} modalRef={modalRef} />}
        </>
    );
}
