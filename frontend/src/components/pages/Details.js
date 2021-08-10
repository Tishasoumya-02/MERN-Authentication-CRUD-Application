import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Data= props => (
    
    <tr>
        
        <td>{props.data.displayName}</td>
        <td>{props.data.age}</td>
        <td>{props.data.hours}</td>
        <td>
            <Link className="btn btn-primary" to={"/edit/"+props.data._id}>Edit</Link>
        </td>
       
    </tr>
)

export default class Details extends Component {

    constructor(props) {
        super(props);
    
        this.state = {datas: []};
      
    }
  
    

    componentDidMount() {
        this.getDataList();
        
    }
 
    getDataList()
    {
        axios.get('http://localhost:5000/data/details')
        .then(response => {
            this.setState({ datas: response.data });
            
        })
        .catch(function (error){
            console.log(error);
        })

    }
         // To delete any employee
 
      
    dataList() {
        
        return this.state.datas.map(function(currentData,i){
            return <Data data={currentData}  key={i} />;
 
        });
    }

    render() {
        
        return (
            <div>
            
                <table className="table table-striped" style={{ marginTop: 30 }} >
                    <thead>
                        <tr>
                            
                            <th>DisplayName</th>
                            <th>Age</th>
                            <th>Hours of Excerise</th>
                            <th>Actions</th>
                          
                        </tr>
                    </thead>
                    
                        { this.dataList() }
                    
                </table>
            </div>
        )
    }

}