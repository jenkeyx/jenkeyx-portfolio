import React, {useState} from "react";
import "./header.scss"
import {ReactComponent as Moon}from "../../svg/moon.svg"

const Header = () => {
    return (
        <div className={"container"}>
            <div className={"logo"}>
                SM
            </div>
            <div className={"left-tab"}>
                <LangToggle/>
                <svg id="chart" width="3" height="50" style={{stroke: "#14213D", strokeWidth:1}}>
                    <line x1="2" y1="0" x2="2" y2="50"></line>
                </svg>
                <div>
                    <Moon style={{color:"#14213D"}}/>
                </div>
            </div>
        </div>
    )
}

const LangToggle = () => {

    const [selectedLang, setSelectedLang] = useState("eng");

    const getClassName = (targetLang) => `toggle-button ${selectedLang === targetLang ? "selected" : ""}`
    return (
        <div className={"toggle-wrap"}>
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
