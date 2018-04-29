import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./containers/Login";

class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/main' component={Main} />
        </ Switch>
        
    </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}
 /* 
          <Route path='/login/' component={Login} />
          <Route path='/inventory/' component={Inventory} />
          <Route path='/request/' component={Request} />
          <Route path='/view/' component={View} /> */
export default App;
