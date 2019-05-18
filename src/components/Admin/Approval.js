import React, { Component } from 'react'
import {Card,Button,Nav} from 'react-bootstrap';
import "./Approval.css"
import axios from 'axios'


class Approval extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            token:'tinzpp0el0yxz4xzb35o0qjgz4ied6',
            personDetails:null,
            isShow : false,
            declineRequest:"rejected",
            decline_Status:"Rejected",
            approved_Status:"Approved"
             
        }

        this.declineRequest = this.declineRequest.bind(this)
        this.status = this.status.bind(this);
        this.approvedRequest = this.approvedRequest.bind(this)
    }
    
componentDidMount(){
    const config = {
        url: "/api/get_requests/",
        method: 'GET',
        withCredentials: true,

    }
    axios(config)
    .then((res) => {
        this.setState({
            posts: res.data
        });

        // console.log(res.data)
    });
    

}

status(status){
    const config1 = {
       
        method: 'PUT',
        url: '/api/get_requests/',
        withCredentials: true,
        data:{
          leave_status : status,

        }
        
    }
    axios(config1).then((response) => {
        console.log("RESPONSE****",response.data)
    });
    console.log(config1)
}
    
        approvedRequest(e){
            this.setState({
                isShow : true,
                approved_Status:"Approved"
                
            
            })
            this.status("Approved")
        }

declineRequest(e){
    this.setState({

      
        isShow : true,
        decline_Status:"Rejected"

        
    
    })
    this.status("Rejected")
    
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

          

{ this.state.posts.map(post => 
                  <Card style={{ width: '16rem', marginLeft:'10px' }} id="#div1">
                <Card.Header><h5>{post.username}</h5><span>Web Developer</span>

                
                </Card.Header>

                    <Card.Body>
                        <Card.Title>

                        </Card.Title>
                        <Card.Text>
                        <p>{post.Type_of_Request}</p>

                        <p>{post.leave_start_date} </p><p> {post.leave_end_date}</p>

                            <p>{post.apply_reason}</p>
                       
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button className="col-md-5 btn" variant="danger"  onClick={this.declineRequest}>Decline</Button>
                        <Button className="col-md-5 btn" variant="success" onClick={this.approvedRequest} >Accept</Button>
                    </Card.Footer>
                </Card>
)}
         

       
       </div>
                
       </div> 
      </div>
    )
  }
}

export default Approval
