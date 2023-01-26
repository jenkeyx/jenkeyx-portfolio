import React from "react";
import "./list.scss"

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
    return (<div className={"project"}>
        <div className={"name outlined-text"}>
            {projectData.name}
        </div>
    </div>)
}

export default ProjectList