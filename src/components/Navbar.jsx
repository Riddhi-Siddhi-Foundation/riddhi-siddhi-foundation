import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/riddhi_logo.webp";
import { NavLink, Link } from "react-router-dom";

const items = [
  {label:"Home",path:"/"},
  {label:"About Us",path:"/about"},
  {label:"Activities",path:"/activities"},
  {label:"Gallery",path:"/galleries"},
  {label:"Contact",path:"/contact"},
];

export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="navbar">
   <div className="navbar-container">
     <Link to="/" className="navbar-logo"><img src={logo} alt="Riddhi Siddhi Foundation"/></Link>
     <nav className="desktop-nav">{items.map(i=><NavLink key={i.path} to={i.path} end={i.path==="/"} className={({isActive})=>`nav-link ${isActive?"active":""}`}>{i.label}</NavLink>)}</nav>
     <Link to="/support" className="support-btn desktop-support"><span>❤︎</span> Support Us</Link>
     <button className={`menu-toggle ${open?"open":""}`} onClick={()=>setOpen(!open)} aria-label="Menu"><i></i><i></i><i></i></button>
   </div>
   <div className={`mobile-menu ${open?"show":""}`}>
    {items.map(i=><NavLink key={i.path} to={i.path} end={i.path==="/"} onClick={()=>setOpen(false)} className={({isActive})=>`mobile-nav-link ${isActive?"active":""}`}>{i.label}</NavLink>)}
    <Link to="/support" onClick={()=>setOpen(false)} className="support-btn mobile-support">♡ &nbsp; Support Us</Link>
   </div>
 </header>
}
