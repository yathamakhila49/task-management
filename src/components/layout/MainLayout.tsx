import "./MainLayout.css"
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "@tanstack/react-router";


function MainLayout(){
    return(
        <div className="main-layout">
          <Navbar/>
            <div className="dashboard-container">
                 <Sidebar/>
                 <main className="main-content">
                    <Outlet/>
                </main>
            </div>

        </div>
    )
}

export default MainLayout;