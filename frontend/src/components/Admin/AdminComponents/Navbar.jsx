import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
// ROUTING
import { Link } from "react-router-dom";
// DATA FILE
import { SidebarData } from "./SlidebarData";
// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* <div className="navbarofnavbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100" >
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
              aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="main-navbar">
              <ul className="navbar-nav mx-auto">
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
                <li className="nav-text">
                  <Link onClick={logout}>
                    <IoIcons.IoIosLogOut />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
