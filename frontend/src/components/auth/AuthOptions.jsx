import React, { useContext } from 'react';
import { Nav, NavItem ,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import {Link} from 'react-router-dom';

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };
 
    const margin={
        marginLeft:"5%"
          
      }
    return (
        <Nav className="auth-options">
            {userData.user ? (
                <div>
                <NavItem style={margin}> <Button className="btn btn-primary " onClick={logout}>Logout</Button></NavItem>
                </div>
               
            ) : (
                <>
                <NavItem style={margin}> <Button className="btn btn-primary mr-auto" onClick={register}>Register</Button></NavItem>
               <NavItem style={margin}>  <Button className="btn btn-primary mr-auto " onClick={login}>Login</Button></NavItem>
              
                </>
            )}
        </Nav>
    )
}

export default AuthOptions;