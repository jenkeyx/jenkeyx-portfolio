import React from "react";
import {Link, useLoaderData} from "react-router-dom";
import styles from"./article.module.scss";
import {ReactComponent as ArrowBack} from "../static/svg/arrow-back.svg";

export const getArticleName = ({params}) => {
    return params.projectId
}

const Article = ({projectsData}) => {
    const projectId = useLoaderData()
    const data = projectsData.find(project=> project.id === projectId)

    return (<div className={styles["article"]}>
        <div className={styles["header"]}>
            <Link to={"/"} className={styles["back-button"]}>
                <button className={styles["back-button"]}>
                    <ArrowBack/>
                </button>
            </Link>
            <div className={styles["title"]}>
                {data.name}
            </div>
        </div>
        <div className={styles["tag-list"]}>
            {data.technologies.map(item=> <div className={styles["tag"]}>{item.replace(",","")}</div>)}
        </div>
        <div className={styles["content"]}>
            <div className={styles["main-pic-wrap"]}>
                <img className={styles["main-pic"]} alt={data.name} src={require(`../static/img/${data.pictures.mainPic}`)}/>
            </div>
            <div className={styles["description"]}>
                {data.description}
            </div>
                {
                    data.pictures.showcases.map(showcase=><div className={styles["showcase"]}>
                        <img className={styles["main-pic"]} src={require(`../static/img/${showcase.src}`)} alt={showcase.alt}/>
                        <div className={styles["caption"]}>
                            {showcase.alt}
                        </div>
                    </div>)
                }
        </div>
    </div>)
}

export default Article
