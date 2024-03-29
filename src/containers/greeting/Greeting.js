import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import "../../components/button/Button.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import WelcomeImg from "./WelcomeImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
import { NavLink } from "react-router-dom";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <div className="greeting-gif">
                <h1 className="greeting-sub " style={{ color: theme.grayText }}>
                  I'm{" "}
                  <mark data-entity="">
                    {" "}
                    <span style={{ color: theme.text }}>{greeting.sub} </span>
                  </mark>
                </h1>
                <div className="welcomeGreeting">
                  <WelcomeImg />
                </div>
              </div>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Web Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Freelancer")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A passionate Web Developer based in Bangalore, India. I
                  Deliver high-performance solutions with a focus on
                  user-centric design and seamless functionality.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <NavLink className="main-button" to="/contact">
                  {" "}
                  Contact Me{" "}
                </NavLink>
                <NavLink
                  className="main-button"
                  to="/assets/Suresh-FED.pdf"
                  target="_blank"
                >
                  See my resume
                </NavLink>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
