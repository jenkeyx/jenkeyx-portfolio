import './App.css';
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import NavPanel from "./components/navPanel/navPanel";
import AboutMe from "./components/about/aboutMe";

function App() {
  return (
    <div className="App">
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
