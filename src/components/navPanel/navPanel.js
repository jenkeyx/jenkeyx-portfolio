import React from "react";
import "./navPanel.scss"
const NavPanel = () =>{

    return(
        <div className={"wrap"}>
            <div className={"nav-panel"}>
                <button className={"nav-item"}>
                    About me
                </button>
                <button className={"nav-item"}>
                    Projects
                </button>
                <button className={"nav-item"}>
                    Skills
                </button>
            </div>
        </div>
    )
}

export default NavPanel