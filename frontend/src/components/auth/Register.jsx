import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import '../../styles/Register.css'

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName};
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:5000/users/login", {
                email, password
            });
          
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
        height: '500px',
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
        top:'.10rem',
        right:".02rem",
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
    
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            
           <div className="d-flex justify-content-center form_container">
            <form onSubmit={submit}>
            <div className="input-group mb-3">
                <div className="form-group input-group-append">
               <span className="input-group-text"><i className="fa fa-user"></i></span>
                <input type="email" id="email" placeholder="Enter your Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                </div>
                <div className="input-group mb-2">
                <div className="form-group input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span> 
                <input type="password" id="password" placeholder="Password of length>=5"onChange={e => setPassword(e.target.value)}/>
                </div>
                </div>
                <div className="input-group mb-2">
                <div className="form-group input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span> 
                <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/>
                </div>
                </div>
                <div className="input-group mb-2">
                <div className="form-group input-group-append">
                <span className="input-group-text"><i className="fa fa-user"></i></span> 
                <input type="text" id="dsplay-name" placeholder="Your name" onChange={e => setDisplayName(e.target.value)}/>
                </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="submit"  name="button" class="btn login_btn">Register</button>
				   </div>
                   <div className="mt-4">
               <div className="d-flex justify-content-center links">
                 <Link to="/login" className="register" style={{textDecoration:"none",paddingTop:'.4rem'}}>Already have an account ?</Link>
              </div>
             </div>

                {/* <input type="submit" value="Register" className="btn btn-primary" /> */}
            </form>
        </div>
        </div>
        </div>
        </div>
       
        );
}
 
export default Register;