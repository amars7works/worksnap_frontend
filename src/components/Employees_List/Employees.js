import React, { Component } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import  './Employee.css';

import {Card} from 'react-bootstrap'
import axios from 'axios'

class Employees extends Component {
constructor(props) {
    super(props)

    this.state = {
        posts:[],

    }
}



componentDidMount(){
        const config = {
            url: "/api/get_emp_list/",
            method: 'GET',
            withCredentials: true,
      
        }
        axios(config)
        .then((res) => {
            this.setState({
                posts: res.data
            });
      
            console.log(res.data)
        });
        
      }

  render() {
    return (
      <div>
           <div className="container">
      <div className="row">

  { this.state.posts.map(post => 
      <Card className="employCard" style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                    <Card.Title><h5>{post.username}</h5></Card.Title>
                    <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
               
        </Card>
  )}
      
        </div>
      </div>

     
      </div>
    )
  }
}

export default Employees
