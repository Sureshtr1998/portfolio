import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
//import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import ReactGA from "react-ga";
function App() {
 // const [themeVal, setThemeVal] = useState(localStorage.getItem('theme') && JSON.parse(localStorage.getItem('theme')));
  useEffect(() => {
    // Change this below tracking id to your own
    ReactGA.initialize("UA-199564465-1");
  });
  // const themeChange = (val) => {
  //   localStorage.setItem('theme',val)
  //   setThemeVal(val)
  // };  
  // const blackTheme = {
  //   body: "#000000",
  //   text: "#ffffff",
  //   blue: "#1179f7",
  //   orange: "#ffa500",
  // };
  
  const lightTheme = {
    body: "#ffffff",
    text: "#000000",
    blue: "#1179f7",
    orange: "#ffa500",
  };
  return (
    <ThemeProvider theme={lightTheme}>
    {/* <ThemeProvider theme={themeVal ? lightTheme : blackTheme}> */}
      <>
        <GlobalStyles />
        <div>
          <Main theme={lightTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
