import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
                <Navigation/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout