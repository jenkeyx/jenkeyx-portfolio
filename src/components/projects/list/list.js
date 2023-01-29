import React, {useState} from "react";
import "./list.scss";
import {ReactComponent as Cross} from "../../../svg/cross.svg"


const ProjectList = ({data}) => {

    const groupByYear = data.reduce((list, project) => {
        const {year} = project
        list[year] = list[year] ?? []
        list[year].push(project)

        return list
    }, {})

    const getYearsArray = () => {
        const years = []
        for (let year in groupByYear)
            years.push(year)

        return years
    }


    return (
        <div className={"project-list"}>
            {getYearsArray().map(year => (
                <div className={"sublist"}>
                    <div className={"year"}>{year}</div>
                    <div className={"project-sublist"}>
                        {groupByYear[year].map(project => <ListItem
                            projectData={project}/>)}
                    </div>
                </div>
            ))}
        </div>
    )
}

const ListItem = ({projectData}) => {

    const [open, setOpen] = useState(false);

    return (<div className={"project"}>
        <div className={"head"} onClick={()=>setOpen(prev=> !prev)}>
            <div className={`name outlined-text ${open ? "open" : null}`}>
                {projectData.name}
            </div>
            <Cross className={`cross ${open ? "open" : null}`} />
        </div>
        <div className={`body ${open ? "open" : null}`}>
            <div className={"tags"}>
                [{projectData.technologies.map((item, i, technologies) =>
                i + 1 === technologies.length ? `${item}` : `${item}, `)}]
            </div>
            <div className={"project-description"}>
                {projectData.description}
            </div>
        </div>
    </div>)
}

export default ProjectList