import React, {useEffect, useState} from "react";
import {Link, useLoaderData, useLocation} from "react-router-dom";
import styles from"./article.module.scss";
import {ReactComponent as ArrowBack} from "../static/svg/arrow-back.svg";
import ProjectImage, {ImageLoader} from "../components/image/ProjectImage";

export const getArticleName = ({params}) => {
    return params.projectId
}

const Article = ({projectsData}) => {
    const projectId = useLoaderData()
    const data = projectsData.find(project=> project.id === projectId)

    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    const [isMainImgLoaded, setIsMainImgLoaded] = useState(false);

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
                {!isMainImgLoaded && <ImageLoader style={{flexShrink:0}}/>}
                <img className={styles["main-pic"]} alt={data.name} src={require(`../static/img/${data.pictures.mainPic}`)} onLoad={()=> setIsMainImgLoaded(true)}/>
            </div>
            <div className={styles["description"]}>
                {data.description}
            </div>
                {
                    data.pictures.showcases.map(showcase=><ProjectImage src={showcase.src} alt={showcase.alt}/>)
                }
        </div>
    </div>)
}

export default Article
