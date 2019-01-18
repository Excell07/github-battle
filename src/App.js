import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Battle from "./components/Battle";
import Results from "./components/Results";
import Popular from "./components/Popular";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              render={function() {
                return <p>Not Found!</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
