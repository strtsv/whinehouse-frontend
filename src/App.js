import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/fonts.css";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";

import Programs from "./pages/Programs";
import News from "./pages/News";
import SingleProgram from "./pages/SingleProgram";
import SinglePost from "./pages/SinglePost";
// import Contact from "./pages/Contact";
// import News from "./pages/News";
// import NewsPost from "./pages/NewsPost";
// import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={Programs} />
      <Route exact path="/programs.html" component={Programs} />
      <Route exact path="/news.html" component={News} />
      {/* <Route exact path="/contact-us.html" component={Contact} /> */}
      <Route exact path="/single-post.html" component={SinglePost} />
      <Route exact path="/single-program.html" component={SingleProgram} />
      {/* <Route exact path="/testimonials.html" component={Testimonials} /> */}
      {/* <Route exact path="/news-post.html" component={NewsPost} /> */}
      {/* <Route exact path="/news.html" component={News} /> */}
      <Route exact path="/" component={Programs} />
    </Switch>
  );
}

export default App;
