import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { Container, Row, Col } from "react-bootstrap";
//import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
//import { projectcards } from "../../portfolio";
import { projects } from "../../portfolio";
//import { CardColumns, Card } from "react-bootstrap";
import "./Projects.css";
import Cards from '../../components/Cards/Cards'
import ProjectsImg from "./ProjectsImg";
// import HumansImg from "./HumansImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
              {/* <HumansImg theme={theme}/> */}
            </div>
          </Fade>
        </div>
        <Container fluid className="project-section">
      <Container>
        <Row className="project">
        <div className="heading-div">
            <div>
              <Col md={2}>

          { projects.details.map((proj) => {
            return (
             <Cards key={proj.title}  imgsrc={require(`../../assets/projects/${proj.img_path}`)} 
             data={proj}/>
            )
          }
          )}
          </Col>
          </div>
          </div>
          </Row>
      </Container>
    </Container>

        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/Sureshtr1998"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
