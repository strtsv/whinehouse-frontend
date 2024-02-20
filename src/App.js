import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";


// import "./assets/js/tmstickup.js";
import { WOW } from "./assets/js/wow.js";
import "./assets/js/jquery.ui.totop.my.js";
import "./assets/js/parallax.js";
import "./assets/js/jquery.easing.1.3.js";
// import "./assets/js/script.js";

import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
