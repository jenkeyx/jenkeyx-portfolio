import React from "react";


const Skills = ({refProp}) =>{
    return(
        <div className={"chapter"} id={"skills"} ref={refProp}>
            <div className={"title"}>
                sergey.skills()
            </div>
            <div className={"outlined-text"} style={{fontSize: 40}}>
                React.js, Redux, Recoil, SCSS, Node.js, JavaScript, GitHub, GitLab, CI/CD
            </div>
        </div>
    )
}

export default Skills