import React from "react";
import ProjectList from "./list/list";

const Projects = ({refProp, data}) =>{

    return (
        <div className={"chapter"} id={"projects"} ref={refProp}>
            <div className={"title"}>
                sergey.projects()
            </div>
            <ProjectList data={data}/>
        </div>
    )
}

export default Projects