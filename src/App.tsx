import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cliente from "./componentes/cliente/cliente.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/home/home.component";
import Produto from "./componentes/produto/produto.component";
import Pedido from "./componentes/pedido/pedido.component";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cliente">Clientes</Link>
              </li>
              <li>
                <Link to="/produto">Produtos</Link>
              </li>
              <li>
                <Link to="/pedido">Pedidos</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/cliente">
              <Cliente />
            </Route>
            <Route path="/produto">
              <Produto />
            </Route>
            <Route path="/pedido">
              <Pedido />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
