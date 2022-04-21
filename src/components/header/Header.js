import React, { Component } from "react";
import "./Header.css";
//import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
// import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo/logo-01.png";
const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("HEYY")
  //   this.state = {
  //     themeChange:  JSON.parse(localStorage.getItem('theme')) ?  JSON.parse(localStorage.getItem('theme')) : true
  //   };
  // }
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <div style={{backgroundColor: theme.body}} className='fixedHeader' >
        <SeoHeader />
        <div>
          <header className="header" fixed="top">
            <NavLink to={link} tag={Link} className="logo">
              <img className="logo_header" src={logo} alt="logo" />
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education &#38; Certifications
                </NavLink>
              </li>
              <li></li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <div className="btn-bg">
                <input type="checkbox" onChange={()=> {
                   this.props.themeChange(!JSON.parse(localStorage.getItem('theme')))
                   }} checked={JSON.parse(localStorage.getItem('theme'))}/>
                <div className="btn-in">
                <span className="on spanSwitch"><i className={`fa fa-sun`}> </i></span>
                <span className="off spanSwitch"><i className="fa fa-moon"></i></span>
                </div>
                </div>
                </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;
