import React, { useEffect, useState } from "react";
import styles from "./modalOnPosts.module.scss";
import axios from "axios";
import { useFormik } from "formik";
import Button from "../UI/button/Button";

const ModalOnPosts = ({ id, modalRef }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`http://test-backend.itdelta.agency/api/image/${id}`)
            .then((response) => {
                setData(response?.data);
                console.log("response?.data", response?.data);
            })
            .catch((error) => {
                console.error("error:", error);
            });
    }, [id]);

    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post(`http://test-backend.itdelta.agency/api/image/${id}/comments`, { comment: values.comment });
                resetForm();
            } catch (error) {
                console.error("Ошибка при отправке комментария:", error);
            }
        },
    });

    return (
        <div className={styles.layout}>
            <div className={styles.wrapper} ref={modalRef}>
                <div className={styles.image}>
                    <img src={data?.image} alt="" />
                </div>
                <form onSubmit={formik.handleSubmit} className={styles.comment_layout}>
                    <div>
                        <p className={styles.comment_top}>Комментарий</p>
                        <textarea className={styles.comment} id="comment" name="comment" type="text" value={formik.values.comment} onChange={formik.handleChange} />
                        <p className={styles.comment_bottom}>Напишите несколько предложений о фотографии.</p>
                    </div>
                    <div className={styles.button}>
                        <Button color={"violet"} type={"submit"}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalOnPosts;
