import React from "react";
import "./navPanel.scss"
const NavPanel = () =>{

    return(
        <div className={"wrap"}>
            <div className={"nav-panel"}>
                <a href={"#about"}>
                    <button className={"nav-item"}>
                        About me
                    </button>
                </a>
                <a href={"#about"}>
                    <button className={"nav-item"}>
                        Projects
                    </button>
                </a>
                <a href={"#about"}>
                    <button className={"nav-item"}>
                        Skills
                    </button>
                </a>
            </div>
        </div>
    )
}

export default NavPanel