import React, { Component } from 'react';
import  './Employee.css';

import "react-datepicker/dist/react-datepicker.css";
import {Card} from 'react-bootstrap'

class Employees extends Component {
constructor(props) {
    super(props)

    this.state = {
    }
}



  async componentDidMount(){
    const url="http://192.168.10.174:8000/api/leave/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({personDetails: data.result[0], loading:false });
  }

  render() {
    return (
      <div>
          

      <div className="row">   

       {/* {this.state.loading || !this.state.person ?(
              <div>loading ....</div>
          ):(  */}
      <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                    <Card.Title>Employee Name</Card.Title>
                    <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
               
        </Card>
        {/* )}  */}
        <Card style={{ width: '14rem' }}>
                {/* <Card.Img variant="top" src="./Assets/men.jpeg" /> */}
                <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        <Card style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                <Card.Title>Employee Name</Card.Title>
                <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
                
        </Card>
        </div>
      </div>
    )
  }
}

export default Employees
