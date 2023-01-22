import './App.css';
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import NavPanel from "./components/navPanel/navPanel";
import AboutMe from "./components/about/aboutMe";
import {useRef} from "react";
import Cursor from "./components/cursor/cursror";

function App() {

    const appRef = useRef()

  return (
    <div className="App" ref={appRef}>
        <Cursor/>
      <Header/>
        <div className={"content-wrap"} >
            <div>
                <Landing/>
                <AboutMe/>
            </div>
            <NavPanel/>
        </div>
    </div>
  );
}

export default App;
