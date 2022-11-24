import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/EduEx/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { createBrowserHistory } from "history";
import Header from "../components/header/Header"

import ReactGA from "react-ga";
export const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.pageview(location.pathname);
  //console.log(location.pathname);
  window.scrollTo(0, 0)
});

export default class Main extends Component {
  render() {
    const lightTheme = {
      body: "#ffffff",
      text: "#000000",
      blue: "#1179f7",
      orange: "#ffa500",
    };
      return (
        <div>
          <Router basename="/"  history={history}>
          <Header theme={lightTheme}/>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home    {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props}   theme={this.props.theme} />}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props}   theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props}   theme={this.props.theme} />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props}   theme={this.props.theme} />
                )}
              />
            </Switch>
          </Router>
        </div>
      );
    }
}
