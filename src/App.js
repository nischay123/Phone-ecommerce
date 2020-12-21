import React from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Productlist from './Productlist';
import Detail from './Detail';
import Cart from './cart.js'
import Modal from './components/Modal'

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <Switch>
        <Route path='/cart' component={Cart} />
        <Route path='/detail' component={Detail} />
        <Route path='/' component={Productlist} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
