// import React, {Component } from "react";
import React, {useRef,useEffect } from "react";
import lottie from 'lottie-web';
//import data from "./web.svg"
export default function FrontEnd(){
    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./htmldev.json')
      })
    }, [])
    return (
      <div className="App">
        <div className="webDevelopment-lottie container" ref={container}></div>
      </div>
    );
}


//for static images
// class FullStackImg extends Component {
//     render() {
//       return (
//         <div className="App">
//           <div className="container">
//         <img src={data} alt="" width="450"/>
//         </div>
//         </div>
//       );
//     }
//   }
  
//   export default FullStackImg;