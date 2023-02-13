import './App.css';
import Header from "./components/header/header";
import Cursor from "./components/cursor/cursror";

import './index.scss';
import {useRecoilValue} from "recoil";
import {themeAtom} from "./store/theme.atom";
import {languageAtom} from "./store/language.atom";
import {localization} from "./static/localization";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainPage from "./pages/mainPage";
import Article, {getArticleName} from "./pages/Article";

function App() {
    const theme = useRecoilValue(themeAtom)
    const lang = useRecoilValue(languageAtom)
    const localizationData = localization[lang]

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage data={localizationData}/>
        },
        {
            path:"/projects/:projectId",
            loader: getArticleName,
            element: <Article projectsData={localizationData.projects}/>
        },
    ])

    return (
    <>
        <Cursor/>
        <div className={`App ${theme.theme === "light" ? "light" : "dark"}`}>
            <Header/>
            <div className={"background"}></div>
            <div className={"content-wrap"} >
                <RouterProvider router={router}/>
            </div>

        </div>

    </>
  );
}

export default App;
