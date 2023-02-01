import React from "react";
import styles from "./aboutMe.module.scss"

const AboutMe = ({refProp}) => {

    return (
        <div className={"chapter"} id={"about"} ref={refProp}>
            <div className={"title"}>
                sergey.about()
            </div>

            <div className={styles.description}>
                ITMO bachelor in computer science.
                Front-end developer with 1 year of commecrial experience. Build UI, provide better UX for web-sites.
            </div>

            <div className={styles["facts-list"]}>
                <div className={styles.fact}>
                    <div className={styles.number}>2</div>
                    <div className={styles["fact-description"]}>Years of experience in front-end developing</div>
                </div>
                <div className={styles.fact}>
                    <div className={styles.number}>7</div>
                    <div className={styles["fact-description"]}>Projects</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe