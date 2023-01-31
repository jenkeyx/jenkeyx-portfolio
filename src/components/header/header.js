import React, {useState} from "react";
import styles from "./header.module.scss"
import {ReactComponent as Moon}from "../../svg/moon.svg"
import {ReactComponent as Sun}from "../../svg/sun.svg"
import {useRecoilState} from "recoil";
import {themeAtom} from "../../store/theme.atom";

const Header = () => {
    const [theme, setTheme] = useRecoilState(themeAtom)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                SM
            </div>
            <div className={styles["left-tab"]}>
                <LangToggle/>
                <svg id="chart" width="3" height="50">
                    <line x1="2" y1="0" x2="2" y2="50"></line>
                </svg>
                <button className={styles["theme-button"]} onClick={()=> setTheme(prev=> prev.theme === "light" ? {theme: "dark"} : {theme: "light"})}>
                    {theme.theme ==="light" ? <Moon/> : <Sun/>}
                </button>
            </div>
        </div>
    )
}

const LangToggle = () => {

    const [selectedLang, setSelectedLang] = useState("eng");

    const getClassName = (targetLang) => `${styles["toggle-button"]} ${selectedLang === targetLang ? styles.selected : ""}`
    return (
        <div className={styles["toggle-wrap"]}>
            <button className={getClassName("rus")} onClick={()=>setSelectedLang("rus")}>
                RUS
            </button>
            <button className={getClassName("eng")} onClick={()=>setSelectedLang("eng")}>
                ENG
            </button>
        </div>
    )
}

export default Header
