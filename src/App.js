import React from 'react';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import {Route,Switch,Redirect} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      	<Switch>
			<Route path="/login" component={Login}></Route>
			<Route path="/admin" component={Admin}></Route>
			<Redirect to="/login"></Redirect>
      	</Switch>
    )
  }
}

export default App;
