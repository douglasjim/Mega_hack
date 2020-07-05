import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";
import Copyright from "./components/Copyright";
import Cardapio from "./components/Cardapio";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Barril de Lojas</h1>
          <Cardapio/>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
