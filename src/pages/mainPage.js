import React, {useRef} from "react";
import Landing from "../components/landing/landing";
import NavPanel from "../components/navPanel/navPanel";
import AboutMe from "../components/about/aboutMe";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";
import {useOnScreen} from "../hooks/useOnScreen";

const MainPage = ({data}) =>{

    const aboutRef = useRef();
    const projectsRef = useRef();
    const skillsRef = useRef();

    const isAboutOnScreen = useOnScreen(aboutRef)
    const isProjectsOnScreen = useOnScreen(projectsRef)
    const isSkillsOnScreen = useOnScreen(skillsRef)

    return(
        <div>
            <Landing data={data}/>
            <NavPanel about={isAboutOnScreen} project={isProjectsOnScreen} skills={isSkillsOnScreen} data={data.navPanel}/>
            <AboutMe refProp={aboutRef} data={data.about}/>
            <Projects refProp={projectsRef} data={data.projects}/>
            <Skills refProp={skillsRef}/>
        </div>
    )
}

export default MainPage