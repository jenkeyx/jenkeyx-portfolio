import React from "react";
import styles from "./landing.module.scss"
import "../../index.scss"
import {ReactComponent as ArrowDown} from "../../svg/arrow-down.svg";

const Landing = ({refProp,data}) => {
    return (
        <div className={`chapter ${styles.wrap}`} ref={refProp}>
            <div className={styles.landing}>
                <div className={styles["outlined-text"]}>
                    {data.greeting}
                </div>
                <div>
                    <span className={"outlined-text"}>{data.introducing.iam}</span> <span>{data.introducing.name}</span>
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