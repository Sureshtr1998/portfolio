import React, { Component, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../components/header/Header";
import ReactGA from "react-ga";
import Shimmer from "./shimmer/Shimmer";

const Home = lazy(() => import("../pages/home/HomeComponent"));
const Education = lazy(() => import("../pages/EduEx/EducationComponent"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));

export const history = createBrowserHistory();

history.listen((location) => {
  if (location) {
    ReactGA.pageview(location.pathname);
    window.scrollTo(0, 0);
  }
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
        <Router basename="/" history={history}>
          <Header theme={lightTheme} />
          <Suspense fallback={<Shimmer />}>
            <Routes>
              <Route
                path="/"
                exact
                element={<Home theme={this.props.theme} />}
              />
              <Route path="/home" element={<Home theme={this.props.theme} />} />
              <Route
                path="/education"
                element={<Education theme={this.props.theme} />}
              />
              <Route
                path="/contact"
                element={<Contact theme={this.props.theme} />}
              />
              <Route
                path="/projects"
                element={<Projects theme={this.props.theme} />}
              />
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  }
}
