import { Container, Row, Col } from "react-bootstrap";
import "./EducationComponent.css";
import Cards from '../../components/Cards/Cards'
import React from "react";
import {educationCards} from '../../portfolio'
export default function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row className="resume">
        <h1 className="certs-header">
              Education
            </h1>
          <div className="heading-div">
            <div>
              <Col md={2}>
             {
             educationCards.info.map((data) =>{
               return (
                <Cards key={data.title}  imgsrc={require(`../../assets/education/${data.img_path}`)} 
                data={data}/>
               )
             })
             
             }
              </Col>
            </div>
            {/* <div>
              <Col md={6} className="resume-right">
                {resumeright.right.map((head) => {
                  return (
                    <>
                      <h3 className="resume-title">{head.title}</h3>
                      {head.data.map((info) => {
                        return (
                          <Resumecontent
                            title={info.title}
                            subtitle={info.subtitle}
                            date={info.date}
                            content={info.content}
                          ></Resumecontent>
                        );
                      })}
                    </>
                  );
                })}
              </Col>
            </div> */}
          </div>
        </Row>
      </Container>
    </Container>
  );
}
