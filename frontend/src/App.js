import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserContext from './context/userContext';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Details  from './components/pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 

var authtoken;
function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if(token === null){
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
   
    authtoken=token;
    if (tokenResponse.data) {
      const userRes = await axios.get("http://localhost:5000/users/", {
        headers: { "x-auth-token": token },
      });
      setUserData({
        token,
        user: userRes.data,
      });
    }
  }
  useEffect(() => {
      checkLoggedIn(); 
  }, []);
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute component={Create} path="/create" auth={userData.token} />     
          <PrivateRoute path="/details" component={Details} auth={userData.token} />
          <PrivateRoute path="/edit/:id" component={Edit} auth={userData.token}/>
        
        
        </Switch>
        </UserContext.Provider>
    </BrowserRouter>
  );
}
// For each route which needs to be added to the application a new <Route> element is added.
//  The attributes path and component are used to add the configuration settings for each route. By 
// using the attribute path the routing path is set and by using the component attribute the path is connected 
// with a component.

export default  App ;
export {authtoken};
