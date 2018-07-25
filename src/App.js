import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/topics" render={() => <h1>Topics</h1>} />
        </div>
      </Router>
    );
  }
}

export default App;
