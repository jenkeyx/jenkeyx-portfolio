import React from "react";
import ProjectList from "./list/list";
import {projectData} from "./projectData";

const Projects = ({refProp}) =>{

    return (
        <div className={"chapter"} id={"projects"} ref={refProp}>
            <div className={"title"}>
                sergey.projects()
            </div>
            <ProjectList data={projectData}/>
        </div>
    )
}

export default Projects