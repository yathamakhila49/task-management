import './Navbar.css'
import {useState} from "react"
import {LuListChecks, LuSearch,LuBell, LuChevronDown} from 'react-icons/lu'
function Navbar(){
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    return(
        <header className='navbar'>
            <div className="navbar-left">
                <div className="logo-icon">
                    <LuListChecks />
                </div>
                <h2 className="logo-text">
                    TaskFlow
                </h2>
            </div>
            <div className="navbar-center">
                 <div className="search-box">
                    <LuSearch className="search-icon"/>
                    <input type="text" placeholder="search tasks..."/>
                 </div>
            </div>
            <div className="navbar-right">
                <button className="notification-btn">
                    <LuBell/>
                    <span className="notification-dot"></span>
                </button>
                <button className="profile-btn" onClick={()=>setIsProfileOpen(!isProfileOpen)}>
                    <div className="profile-avatar">
                        A
                    </div>
                    <span className="profile-name">Alex Morgan</span>
                    <LuChevronDown/>
                </button>
                {isProfileOpen && (
    <div className="profile-dropdown">
      <div className="dropdown-item">My Profile</div>
      <div className="dropdown-item">Settings</div>
      <div className="dropdown-item">Logout</div>
    </div>
  )}
            </div>
        </header>
    )
}
export default Navbar;