import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
      <div className='containerCard'>
        <div className="column">
      <div className="card">
        <div className="content">
          <div className="front">
            <img className="profile" width="100%" src={props.imgsrc} alt="Data"/>
            <h2 className='frontTitle' style={{color:"gray"}}>{props.data.title}</h2>
          </div>
          <div className="back from-bottom">
            <h2>{props.data.title}</h2>
            {props.data.percentage &&
            <h3>{props.data.percentage}</h3> }
            {props.data.scored &&
            <h3>{props.data.scored} / {props.data.total}</h3> }
             &nbsp;
             <h3> {props.data.name}</h3>
             <br/>
            <p className="des">
              {props.data.description}
            </p>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
