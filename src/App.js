import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login/' component={Login} />
          <Route path='/inventory/' component={Inventory} />
          <Route path='/request/' component={Request} />
          <Route path='/view/' component={View} />
          <Route component={NotFound} />
        </ Switch>
        
    </BrowserRouter>
    );
  }
}

export default App;
