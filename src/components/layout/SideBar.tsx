import "./SideBar.css"
import { LuLayoutDashboard,
  LuListTodo,
  LuCalendarDays,
  LuChartNoAxesColumn,
  LuFolder,
  LuUsers,
  LuSettings } from "react-icons/lu";
function Sidebar(){
  return(
    <aside className="sidebar">
      <div className="sidebar-menu">
         <div className="sidebar-item">
          <LuLayoutDashboard/>
          <span>Dashboard</span>
        </div>
        <div className="sidebar-item">
          <LuListTodo/>
          <span>My Tasks</span>
        </div>
        <div className="sidebar-item">
          <LuCalendarDays/>
          <span>Calender</span>
        </div>
        <div className="sidebar-item">
          <LuChartNoAxesColumn/>
          <span>Reports</span>
        </div>

        {/* Workspace Section */}
<div className="sidebar-menu workspace-menu">

  <h4>WORKSPACE</h4>

  <div className="sidebar-item">
    <LuFolder />
    <span>Projects</span>
  </div>

  <div className="sidebar-item">
    <LuUsers />
    <span>Team Members</span>
  </div>

</div>

{/* Settings Section */}
<div className="sidebar-menu settings-menu">

  <h4>PREFERENCES</h4>

  <div className="sidebar-item">
    <LuSettings />
    <span>Settings</span>
  </div>

</div>
      </div>
    </aside>
  )
}

export default Sidebar;