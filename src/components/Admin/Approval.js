import React, { Component } from 'react'
import {Card,Button,Nav} from 'react-bootstrap';
import "./Approval.css"

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            token:'tinzpp0el0yxz4xzb35o0qjgz4ied6',
            personDetails:null,
        }
    }
    
    // componentDidMount(){
    //     const url = "http://worksnaps.s7works.io/api/leave/"; 
    //     fetch(url ,{
    //         method:"GET"
    //     })
    //     .then(res => res.json())
    //     .then (posts => {
    //         this.setState({
    //             data:data,
    //         })
    //     });
    //     this.setState({person:data.result[0]});
    // }
    // axios({
    //     method: 'post',
    //     url: 'http://worksnaps.s7works.io/apply_leave/',
    //     data:[leave_request_data]
    //   })

   async componentDidMount(){
    const url="http://192.168.10.174:8000/api/leave/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({personDetails: data.result[0], loading:false });

    // localStorage.setItem('session',JSON.stringify(token='tinzpp0el0yxz4xzb35o0qjgz4ied6'));



   }
  
   


  render() {
    return (
      <div>
          <div className="container">
          <div className ="nav header">
          <h2>Approvel Request</h2>
          <div className="col-md-5">
          </div>
          <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href=" ">Leave Request</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Workfromhome">Work from home</Nav.Link>
                </Nav.Item>
                
                </Nav>

          </div>
          <div className="row employrequest">

          {this.state.loading || !this.state.person ?(
              <div>loading ....</div>
          ):(
                  <Card style={{ width: '16rem', marginLeft:'10px' }}>
                <Card.Header><h5>Employ Name</h5><span>Web Developer</span>

                
                </Card.Header>

                    <Card.Body>
                        <Card.Title>
                        <h4>{this.state.personDetails.Type_of_Request}</h4>

                        </Card.Title>
                        <Card.Text>
                        <p>{this.state.personDetails.leave_start_date && this.state.personDetails.leave_end_date}</p>

                            <p>{this.state.personDetails.apply_reason}</p>
                       
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button className="col-md-5 btn" variant="danger">Decline</Button>
                        <Button className="col-md-5 btn" variant="success">Accept</Button>
                    </Card.Footer>
                </Card>

          )}
                

       
                <Card style={{ width: '16rem', marginLeft:'10px' }}>
                <Card.Header><h5>Employ Name</h5><span>Web Developer</span>
{/* 
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col> */}
                </Card.Header>
                    <Card.Body>
                        <Card.Title>Employ Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        leave reason text

                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer  className="text-muted">
                    <Button className="col-md-5 btn" variant="danger">Decline</Button>
                        <Button className="col-md-5 btn" variant="success">Accept</Button>
                    </Card.Footer>




                </Card>
                <Card style={{ width: '16rem', marginLeft:'10px' }}>
                <Card.Header><h5>Employ Name</h5><span>Web Developer</span>
                    {/* <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                    </Col> */}
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Employ Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        leave reason text

                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button className="col-md-5 btn" variant="danger">Decline</Button>
                        <Button className="col-md-5 btn" variant="success">Accept</Button>
                    </Card.Footer>
                </Card>


                <Card style={{ width: '16rem', marginLeft:'10px' }}>
                <Card.Header><h5>Employ Name</h5><span>Web Developer</span>

                {/* <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col> */}
                </Card.Header>
                    <Card.Body>

                        <Card.Title>Employ Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        leave reason text

                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button className="col-md-5 btn" variant="danger">Decline</Button>
                        <Button className="col-md-5 btn" variant="success">Accept</Button>
                    </Card.Footer>

                </Card>
                </div>
                </div>
        
      </div>
    )
  }
}

export default Approval
