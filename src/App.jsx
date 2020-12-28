import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AvailableKittens from "./components/AvailableKittens";
import Contact from "./components/Contact";
import AdoptionSteps from "./components/AdoptionSteps";
// import ToTop from "./components/ToTop";
const App = () => {
  const RouteWithContact = ({ exact = false, path, Component }) => {
    return (
      <Route exact={exact} path={path}>
        <Component />
        <Contact />
      </Route>
    );
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <RouteWithContact exact path='/' Component={Home} />
        <RouteWithContact path='/faq' Component={About} />
        <RouteWithContact path='/available_kittens' Component={AvailableKittens} />
        <Route path='/adoption_steps' component={AdoptionSteps} />
        {/* <ToTop /> */}
      </Switch>
    </Router>
  );
};
export default App;
