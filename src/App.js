import './App.css';
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import NavPanel from "./components/navPanel/navPanel";

function App() {
  return (
    <div className="App">
      <Header/>
        <div className={"content-wrap"}>
            <div>
                <Landing/>
            </div>
            <NavPanel/>
        </div>
    </div>
  );
}

export default App;
