import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/home";
import AboutUs from "./components/aboutus/aboutus";

import Contact from "./components/contact/contact";
import Demos from "./components/demos/demos";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload asfdsdafsdfgfdsfgdf.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Home />
      </header> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/demos" component={Demos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
