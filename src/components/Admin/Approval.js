import React, { Component } from 'react'
import {Card,Button,Nav} from 'react-bootstrap';
import "./Approval.css"


const axios = require('axios');

class Approval extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            token:'tinzpp0el0yxz4xzb35o0qjgz4ied6',
            personDetails:null,
        }
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
            // this.setState({personDetails: data.return[0], loading:false });

        console.log(res.data)
    });
}


  render() {
    // $(document).ready(function(){
    //   $("Button").click(function(){
    //     $("#div1").remove();
    //   })
    // });

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
                <Card.Header><h5>{post.id}</h5><span>Web Developer</span>

                
                </Card.Header>

                    <Card.Body>
                        <Card.Title>
                        {/* <h4>{ this.state.posts(posts => {posts.id})}</h4> */}

                        </Card.Title>
                        <Card.Text>
                        <p>{post.Type_of_Request}</p>

                        <p>{post.leave_start_date} </p><p> {post.leave_end_date}</p>

                            <p>{post.apply_reason}</p>
                       
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <Button className="col-md-5 btn" variant="danger">Decline</Button>
                        <Button className="col-md-5 btn" variant="success">Accept</Button>
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
