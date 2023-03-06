import React, {useState} from "react";
import styles from "./list.module.scss";
import {ReactComponent as ArrowRight} from "../../../static/svg/arrow_right.svg"
import {Link} from "react-router-dom";


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
        <div className={styles["project-list"]}>
            {getYearsArray().map(year => (
                <div className={styles.sublist}>
                    <div className={styles.year}>{year}</div>
                    <div className={styles["project-sublist"]}>
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

    return (<div className={styles.project}>
        <div className={styles.head} onClick={()=>setOpen(prev=> !prev)}>
            <Link to={`/projects/${projectData.id}`} style={{textDecoration:"none", color:"inherit"}}>
                <div className={`${styles.name} outlined-text ${open ? styles.open : null}`}>
                    {projectData.name}
                </div>
            </Link>
            <ArrowRight/>
        </div>
    </div>)
}

export default ProjectList