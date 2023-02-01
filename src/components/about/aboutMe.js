import React from "react";
import styles from "./aboutMe.module.scss"

const AboutMe = ({refProp, data}) => {

    return (
        <div className={"chapter"} id={"about"} ref={refProp}>
            <div className={"title"}>
                sergey.about()
            </div>

            <div className={styles.description}>
                {data.description}
            </div>

            <div className={styles["facts-list"]}>
                <div className={styles.fact}>
                    <div className={styles.number}>2</div>
                    <div className={styles["fact-description"]}>{data.facts.experience}</div>
                </div>
                <div className={styles.fact}>
                    <div className={styles.number}>7</div>
                    <div className={styles["fact-description"]}>{data.facts.projects}</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe