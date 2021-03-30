import React, { Component } from "react";
import Navbar from "./components/navbar";
import Mentors from "./components/mentors";
import Landings from "./components/landing";
import Info from "./components/info";
import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landings} />
            <Route exact path='/about' component={Info} />
            <Route exact path='/mentors' component={Mentors} />
          </Switch>
          <Footer/>
        </div>
    );
  }
}

export default App;
