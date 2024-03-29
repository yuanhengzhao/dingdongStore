import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import AvailableKittens from './components/AvailableKittens';
import AdoptionSteps from './components/AdoptionSteps';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={FAQ} />
        <Route path="/available" component={AvailableKittens} />
        <Route path="/adoption_steps" component={AdoptionSteps} />
      </Switch>
    </Router>
  );
};
export default App;
