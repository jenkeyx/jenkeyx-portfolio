import './App.css';
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import NavPanel from "./components/navPanel/navPanel";
import AboutMe from "./components/about/aboutMe";
import {useRef} from "react";
import Cursor from "./components/cursor/cursror";
import Projects from "./components/projects/projects";

function App() {

    const appRef = useRef()

  return (
    <>
        <Cursor/>
        <div className="App" ref={appRef}>
            <Header/>
            <div className={"content-wrap"} >
                <div>
                    <Landing/>
                    <AboutMe/>
                    <Projects/>
                </div>
                <NavPanel/>
            </div>

        </div>

    </>
  );
}

export default App;
