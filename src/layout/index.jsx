import { AppContext } from "../context"
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useContext } from "react";

const Layout = () => {

    const contextValues = useContext(AppContext)

    return (
        <div className="mode-body" data-theme2={contextValues.theme === "light" ? "light" : "dark"}>
            <div>
                <Header/>
                <Navigation/>
                <button onClick={contextValues.handleThemeSwitch}>モード</button>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout