import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// views layouts

import Landing from "views/Landing.js";
import Mainpage from "views/Mainpage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/mainpage" exact component={Mainpage}/>
      {/* <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
