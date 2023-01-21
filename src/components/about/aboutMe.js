import React from "react";
import "./aboutMe.scss"

const AboutMe = () => {

    return (
        <div className={"chapter"} id={"about"}>
            <div className={"title"}>
                sergeyMhitaryan.about()
            </div>

            <div className={"description"}>
                ITMO bachelor in computer science.
                Front-end developer with 1 year of commecrial experience. Build UI, provide better UX for web-sites.
            </div>

            <div className={"facts-list"}>
                <div className={"fact"}>
                    <div className={"number"}>2</div>
                    <div className={"fact-description"}>Years of experience in front-end developing</div>
                </div>
                <div className={"fact"}>
                    <div className={"number"}>7</div>
                    <div className={"fact-description"}>Projects</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe