import './App.css';
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import NavPanel from "./components/navPanel/navPanel";
import AboutMe from "./components/about/aboutMe";
import Cursor from "./components/cursor/cursror";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

import './index.scss';
import {useRecoilValue} from "recoil";
import {themeAtom} from "./store/theme.atom";
import {useRef} from "react";
import {useOnScreen} from "./hooks/useOnScreen";

function App() {
    const theme = useRecoilValue(themeAtom)
    const landingRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const skillsRef = useRef();

    const isAboutOnScreen = useOnScreen(aboutRef)
    const isProjectsOnScreen = useOnScreen(projectsRef)
    const isSkillsOnScreen = useOnScreen(skillsRef)

    return (
    <>
        <Cursor/>
        <div className={`App ${theme.theme === "light" ? "light" : "dark"}`}>
            <Header/>
            <div className={"background"}></div>
            <div className={"content-wrap"} >
                <div>
                    <Landing refProp={landingRef}/>
                    <NavPanel about={isAboutOnScreen} project={isProjectsOnScreen} skills={isSkillsOnScreen}/>
                    <AboutMe refProp={aboutRef}/>
                    <Projects refProp={projectsRef}/>
                    <Skills refProp={skillsRef}/>
                </div>
            </div>

        </div>

    </>
  );
}

export default App;
