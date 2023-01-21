import React from "react";
import "./landing.scss"
import "../../index.scss"

const Landing = () =>{
    return(
        <div className={"chapter"}>
            <div className={"landing"}>
                <div className={"outlined-text"}>
                    Hello,
                </div>
                <div>
                    <span className={"outlined-text"}>I am</span> <span> Sergey Mhitaryan</span>
                </div>
                <div className={"code"}>
                    &lt;front-end-developer/&gt;
                </div>
            </div>
        </div>
    )
}

export default Landing