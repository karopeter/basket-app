import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.styles.css";


const Sidebar = () => {
    return (
      <>
       <div className="container p-0">
         <nav className="side__nav p-0">
           <ul className="side__world">
              <Link to="" className="logo">
                <span>SmarTest</span>
              </Link>
              <li className="side__list">
                <Link to="" className="side__text">
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="side__list">
                <Link to="/landing-page" className="side__text">
                  <span>Client List</span>
                </Link>
              </li>
              <li className="side__list">
                <Link to="" className="side__text">
                  <span>Report</span>
                </Link>
              </li>
              <li className="side__list">
                <Link to="" className="side__text">
                  <span>User Management</span>
                </Link>
              </li>
              <li className="side__list">
                <Link to="" className="side__text">
                  <span>Central Admin</span>
                </Link>
              </li>
              <li className="side__list">
                <Link to="" className="side__text">
                  <span>State Admin</span>
                </Link>
              </li>
           </ul>
           <div className="bottom">
             <div>
                <Link to="" className="side__link">
                  <span>Logout</span>
                </Link>
             </div>
           </div>
         </nav>
       </div>
      </>
    );
}

export default Sidebar;