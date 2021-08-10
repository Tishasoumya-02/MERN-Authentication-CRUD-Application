import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
// import Card from "react-bootstrap/Card";
import "../../styles/Login.css";

function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
    const user_card={
        height: '450px',
        width: '350px',
        marginTop: '60px',
        marginBottom: '100px',
        background: '#f39c12',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        webkitBoxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        mozBoxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '5px'
    
    }

    const brand_logo={
        position:'absolute',
        top:'.14rem',
        right:".03rem",
        height: "100px",
        width: '100px',
        borderRadius: '50%',
        border: '2px solid white'
    }
    
    return (
        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div  style={user_card}>
        <div className=" d-flex justify-content-center "  >
        <div className="brand_logo_container">
						<img src="https://static.thenounproject.com/png/193149-200.png"  style={brand_logo}alt="Logo" />
					</div>
                    </div>
          
           <div className="d-flex justify-content-center form_container">
            <form onSubmit={submit}>
            {/* <Card style={{ width: "30rem" , height:"25rem"}} className="mx-auto">
           <Card.Title style={{marginTop:"1rem", fontSize:"1.5rem"}}>Login</Card.Title> */}
            {/* <Card.Body> */}
                <div className="input-group mb-3">
                <div className="form-group input-group-append">
               <span className="input-group-text"><i className="fa fa-user"></i></span>
                <input type="email" id="email" className="form-control input_user" onChange={e => setEmail(e.target.value)} placeholder="Enter your email"/>
                </div>
                </div>
                <div className="input-group mb-2">
                <div className="form-group input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span> 
                <input type="password" id="password" className="form-control input_pass" onChange={e => setPassword(e.target.value)} placeholder="Enter your Password"/>
                </div>
                </div>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="submit"  name="button" class="btn login_btn">Login</button>
				   </div>
                {/* <input type="submit" value="Login" className="btn btn-primary" /> */}
               <div className="mt-4">
               <div className="d-flex justify-content-center links">
                 Don't have an account ? {" "}<Link to="/register" className="register" style={{textDecoration:"none"}}>{" "}Sign-Up</Link>
              </div>
             </div>

                {/* </Card.Body>
      </Card> */}
            </form>
            
        </div>
        </div>
        </div>
        </div>
        

    );
}
 
export default Login;