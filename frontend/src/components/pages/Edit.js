import React, { Component } from 'react';
import axios from 'axios';
import { withRouter  } from 'react-router-dom/cjs/react-router-dom.min';
class Edit extends Component {

    constructor(props) {

        super(props);
        this.state = {
            data_displayName: '',
            data_age: '',
            data_hours:''
        }
 
     
        this.onChangeDataDisplayName= this.onChangeDataDisplayName.bind(this);
        this.onChangeDataAge= this.onChangeDataAge.bind(this);
        this.onChangeDataHours= this.onChangeDataHours.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

     
    }
    componentDidMount() {
    
       this.getData();
     
    }

    getData()
    {
        axios.get('http://localhost:5000/data/'+this.props.match.params.id)
        .then(response => {
            this.setState({
               
                data_displayName: response.data.displayName,
                data_age: response.data.age,
                data_hours: response.data.hours,
               
            }) 
            
        })
        .catch(function (error) {
            console.log(error);
        })

    }
    onChangeDataAge(e) {
     
        this.setState({
            data_age: e.target.value
        });
    }
    onChangeDataHours(e) {
     
        this.setState({
            data_hours: e.target.value
        });
    }


    onChangeDataDisplayName(e) {
        this.setState({
            data_displayName: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
    
     
      
      axios.post('http://localhost:5000/data/update/'+this.props.match.params.id, 
        {
            
            displayName: this.state.data_displayName,
            age: this.state.data_age,
            hours: this.state.data_hours,

        })
            .then(res =>{
                console.log(this.state.data_email);
                console.log(this.state.data_displayName);
                this.props.history.push('/details');
});
        
       
     

       
    }
    
    render() {
        return (
            <div>
                 
             <div class="container px-1 py-5 mx-auto">
                 <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
                <h3 align="left" style={{color:"blueviolet"}}>Record Edit</h3>
                <form onSubmit={this.onSubmit}>
            
                    <div className="form-group">
                        <label>Name </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.data_displayName}
                                onChange={this.onChangeDataDisplayName}
                                />
                    </div>
                  
                    <div className="form-group"> 
                        <label>Age </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.data_age}
                                onChange={this.onChangeDataAge}
                                />
                    </div>
                  
                    <div className="form-group"> 
                        <label>Hours of Excerise </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.data_hours}
                                onChange={this.onChangeDataHours}
                                />
                    </div>

<div className="d-flex justify-content-left mt-3" style={{paddingTop:".02rem" ,paddingBottom:"2rem",paddingLeft:"30rem"}} >
    <input type="submit" value="Update Data" className="btn btn-dark" />
</div>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                    
        )}}

        export default withRouter(Edit);