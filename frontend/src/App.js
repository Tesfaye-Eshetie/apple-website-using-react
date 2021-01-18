import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home page
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Components/Pages/Iphone";
import Mac from "./Components/Pages/Mac";
import Watch from "./Components/Pages/Watch";
import Four04 from "./Components/Pages/Four04";
import Productpage from "./Components/Pages/Productpage";

// import general css
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
