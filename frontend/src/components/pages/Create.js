
import React, { useState } from 'react';
import axios from "axios";
import {useHistory} from "react-router";
import { Card } from 'react-bootstrap';



function Create()
{
    const [age, setAge] = useState();
    const [displayName, setDisplayName] = useState();
    const [hours, setHours] = useState();
    const history=useHistory();

    //eslint-disable-next-line
  const [states,setState]=useState('');

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newData = {age, displayName,hours};
       axios.post("http://localhost:5000/data/create", newData);

       setState({
            age: '',
            displayName: '',
            hours:''
        
        })
        history.push({
            pathname: "/details",
        
        })
     
        } catch(err) {
        
            console.log(err);
        }
        
    };

    return(
        <div>
           
             <div class="container px-1 py-5 mx-auto">
                 <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
                       <Card>
                           <Card.Title style={{paddingLeft:"3rem",paddingTop:"2rem",color:"blueviolet"}}>  <h3>Add New Record</h3></Card.Title>
                        <form onSubmit={submit}>
                <div className="row justify-content-between text-left " style={{paddingLeft:"3rem"}}>
                    <div className=" form-group col-6 ">
                                <label className="form-control-label px-3">Name </label>
                                <input 
                                        type="text" 
                                        className="form-control "
                                       placeholder="Enter your Name"
                                        onChange={e => setDisplayName(e.target.value)}
                                        />
                                        </div>
                            </div>
                    
                            <div className="row justify-content-between text-left " style={{paddingLeft:"3rem"}}>
                            <div className="form-group col-6"> 
                                 <label className="form-control-label px-3">Age </label>
                                <input  type="number"
                                        className="form-control"
                                        placeholder="Enter your age"
                                        onChange={e => setAge(e.target.value)}
                                        />
                            </div>
                       </div>
                       <div className="row justify-content-between text-left " style={{paddingLeft:"3rem"}}>
                            <div className="form-group col-6">
                                <label>Hours of Excerise  </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Enter hours of excerise"
                                        onChange={e => setHours(e.target.value)}
                                        />
                            </div>
                            </div>
                  
                         
                        
                            <div className="d-flex justify-content-left mt-3 " style={{paddingTop:".02rem" ,paddingBottom:"2rem",paddingLeft:"25rem"}}>
                                <input type="submit" value="Create Data" className="btn btn-dark" />
                            </div>
                           
                        </form>
                        </Card >
                    </div>
                    </div>
                    </div>
                    </div>
                  
    )
}


export default Create;