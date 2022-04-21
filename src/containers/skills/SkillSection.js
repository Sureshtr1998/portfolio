import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import BackEnd from "./datascience/BackEnd";
import FrontEnd from "./web/FrontEnd";
import DesignImg from "./ui/DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <BackEnd theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FrontEnd theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div key={skill.softwareSkills} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg  key={skill.fileName} fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.blue }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill key={skill.softwareSkills} logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                        key={skillSentence}
                          className="subTitle skills-text"
                          style={{ color: theme.text }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
