import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./app.css";
import Navbar from "../src/components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <Navbar />
        
          <Switch>

            <Route exact path="/" component={ProductList} />
            <Route exact path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route  component={NotFound} />
          
          </Switch>
          <Modal />
        </Router>
        
      </React.Fragment>
    );
  }
}
