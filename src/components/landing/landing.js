import React from "react";
import styles from "./landing.module.scss"
import "../../index.scss"
import {ReactComponent as ArrowDown} from "../../svg/arrow-down.svg";

const Landing = () => {
    return (
        <div className={"chapter"}>
            <div className={styles.landing}>
                <div className={styles["outlined-text"]}>
                    Hello,
                </div>
                <div>
                    <span className={"outlined-text"}>I am</span> <span> Sergey Mhitaryan</span>
                </div>
                <div className={styles.code}>
                    &lt;front-end-developer/&gt;
                </div>

                <button className={styles["arrow-down"]}>
                    <a href={"#nav-panel"}>
                        <ArrowDown/>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Landing