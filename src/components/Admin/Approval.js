import React, { Component } from 'react'
import {Card,Col,Image,Button,Nav} from 'react-bootstrap';
import "./Approval.css"

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
        }
    }
    
    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users"; 
        fetch(url ,{
            method:"GET"
        })
        .then(res => res.json())
        .then (posts => {
            this.setState({
                posts:posts,
            })
        });
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
                <Card style={{ width: '16rem', marginLeft:'10px' }}>
                <Card.Header><h5>Employ Name</h5><span>Web Developer</span>

                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
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

                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
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
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                    </Col>
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

                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
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
