import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => <div>Main Page</div>;
const About = () => <div>About Page</div>;

const NavigationComponent = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default NavigationComponent;
