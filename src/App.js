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

function App() {
    const theme = useRecoilValue(themeAtom)
  return (
    <>
        <Cursor/>
        <div className={`App ${theme.theme === "light" ? "light" : "dark"}`}>
            <Header/>
            <div className={"background"}></div>
            <div className={"content-wrap"} >
                <div>
                    <Landing/>
                    <NavPanel/>
                    <AboutMe/>
                    <Projects/>
                    <Skills/>
                </div>
            </div>

        </div>

    </>
  );
}

export default App;
