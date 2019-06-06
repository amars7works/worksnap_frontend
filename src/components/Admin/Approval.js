import React, { Component } from "react";
import {
  Card,
  Button,
  Badge,
  Nav,
  ButtonToolbar,
  Modal
} from "react-bootstrap";
// import DatePicker from "react-datepicker";
import moment from 'moment';
// import HorizontalScroll from 'react-scroll-horizontal'
import Slider from "react-slick";

import "react-datepicker/dist/react-datepicker.css";
import "./Approval.css";

import axios from "axios";
import Approve_history from "./Approve_history";
import Rejected_history from "./Rejected_history";
import numeral from "numeral";

//Employer Leave Approval page

class Approval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      token: "tinzpp0el0yxz4xzb35o0qjgz4ied6",
      personDetails: null,
      isShow: false,
      declineRequest: "rejected",
      decline_Status: "Rejected",
      approved_Status: "Approved",
      smShow: false
    };

    this.declineRequest = this.declineRequest.bind(this);
    this.status = this.status.bind(this);
    this.approvedRequest = this.approvedRequest.bind(this);
  }

  componentDidMount() {
    const config = {
      url: "/api/get_requests/",
      method: "GET",
      withCredentials: true
    };
    axios(config).then(res => {
      this.setState({
        posts: res.data
      });

      console.log(res.data);
    });
  }

  status(status, id) {
    const config1 = {
      method: "PUT",
      url: "/api/get_requests/",
      withCredentials: true,
      data: {
        leave_status: status,
        id: id
      }
    };
    axios(config1).then(response => {
      console.log("RESPONSE****", response.data);
    });
    console.log(config1);
  }
//If Employer Approve the request then it will send the information to the Employee 
  approvedRequest(id) {
    console.log("id is", id);

    let posts = this.state.posts;

    for (let index = 0; index < posts.length; index++) {
      console.log(posts[index].id, "id:");
      if (posts[index].id == id) {
        console.log("rejected id is:", id);
        posts[index].leave_status = "Approved";
      }
    }

    this.setState({
      isShow: true,
      approved_Status: "Approved"
    });
    this.status("Approved", id);
    // this.status(posts.id)
  }

//If Employer accpet the request then it will send the information to the Employee 

  declineRequest(id) {
    console.log("id is", id);

    let posts = this.state.posts;

    for (let index = 0; index < posts.length; index++) {
      console.log(posts[index].id, "id:");
      if (posts[index].id == id) {
        console.log("rejected id is:", id);
        posts[index].leave_status = "Rejected";
      }
    }
    console.log("posts data is:", posts);
    this.setState({
      isShow: true,
      decline_Status: "Rejected"
    });
    this.status("Rejected", id);
    // this.status(posts.id)
  }

  render() {
    const { CustomNavigation } = this.props;
    const settings = {
      dots: true, 
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      padding: "10px",
    };
    return (
      <div>
        <CustomNavigation />
        <div className="container">
          <div className="col-md-12 header">
            <h2>Approvel Request</h2>
            {/* <div className="col-md-12">
          </div>
          <Nav variant="tabs" className="col-md-12" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/Workfromhome">Work from home</Nav.Link>

                </Nav.Item>
                <Nav.Item>
                <Nav.Link href=" ">Leave Request</Nav.Link>
                </Nav.Item>
                  
                </Nav> */}
          </div>

          <Slider {...settings}>

            {this.state.posts.map(
              post =>
                post.leave_status == "Pending" && (
                  <Card style={{ width: "14.4rem" }} id="#div1">
                    <Card.Header className="card_header">
                      <h5 className="username">{post.username}</h5>
                      <span style={{ fontWeight: "lighter" }}>
                        Web Developer
                      </span>
                    </Card.Header>

                    <Card.Body>
                      <Card.Title />
                      <Card.Text>
                        <p className="date">
                          {moment(post.leave_start_date).format("MMM Do YYYY")}-
                          {moment(post.leave_end_date).format("MMM Do YYYY")}
                        </p>

                        <p>{post.Type_of_Request}</p>

                        <p>{post.apply_reason}</p>
                        <p>
                          Remaining Leaves
                          <Badge variant="secondary">
                            {/* {post.remainingleaves} */}
                            {numeral(post.remainingleaves).format('0,0')}
                          </Badge>
                        </p>
                        {/* <h6>
                            Total Leaves <Badge variant="secondary">New</Badge>
                            </h6> */}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <Button
                        className="col-md-5 btn"
                        variant="danger"
                        onClick={() => {
                          this.declineRequest(post.id);
                        }}
                      >
                        Decline
                      </Button>
                      <Button
                        className="col-md-5 btn"
                        variant="success"
                        onClick={() => {
                          this.approvedRequest(post.id);
                        }}
                      >
                        Accept
                      </Button>
                    </Card.Footer>
                  </Card>
                )
            )}
                    </Slider>

        </div>
        <div className="col-md-8 Approvehistory">  
          <Approve_history />
        </div>
        <div className="col-md-8 Rejectedhistory">
          <Rejected_history />
        </div>
      </div>
    );
  }
}

export default Approval;
