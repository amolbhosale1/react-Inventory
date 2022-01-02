import Navbarw from "./components/Navbarw";
import { Route, Redirect,Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Inventory from "./components/inventory/Inventory";
import React from "react";

function App() {
  return (
    <React.Fragment>
        <Navbarw/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/inventory" component={Inventory}/>
      
          <Redirect path="/" component={Home} />
          <Footer />
          </Switch>
         
     </React.Fragment>
  );
}

export default App;
