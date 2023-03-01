import React from "react";
import styles from "./footer.module.scss"
const Footer = ()=>{
    return <div className={styles["wrap"]}>
        <div className={styles["title"]}>
            Let's work together
        </div>
        <div className={styles["contacts-list"]}>
            <div className={styles["contact"]}>
                <div>
                    Mail
                </div>
                <div>
                    <a href={"mailto:mhitaryan66@gmail.com"}>
                        mhitaryan66@gmail.com
                    </a>
                </div>
            </div>
            <div className={styles["contact"]}>
                <div>
                    Github
                </div>
                <div>
                    <a href={"https://github.com/jenkeyx"}>
                        jenkeyx
                    </a>
                </div>
            </div>
            <div className={styles["contact"]}>
                <div>
                    Tel
                </div>
                <div>
                    <a href={"tel:+79312885041"}>
                        +79312885041
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Footer