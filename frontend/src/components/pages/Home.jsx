import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';


function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    });
    const code="<code />"
    return (
        <div>
            {userData.user ? (
                <div className="text-center">
                <h1 style={{marginTop:"10rem"}}>👋 Hello {userData.user.displayName}, Welcome to {code} </h1><br />
                <div>
                <Link className="btn btn-dark" to="/create" style={{marginRight:"0.5rem"}}>Add Record  </Link>/
                <Link className="btn btn-dark" to="/details" style={{marginLeft:"0.5rem"}}>See the Record</Link>
                
                </div>
                </div>
            ) : (
                <div className="text-center">
                    <h2>It seems you are not logged-in</h2>
                    <Link className="btn-btn-dark" to="/login">Login</Link>
                </div>
            )}
            
        </div>
    );
}
 
export default Home;