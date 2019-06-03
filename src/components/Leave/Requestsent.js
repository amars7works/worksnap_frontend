import React, { Component } from 'react'
import axios from 'axios';


// To check the request status
export class Requestsent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts:[],

        }
    }

    componentDidMount(){
        const config = {
            url: "/api/get_leave_status/",
            method: 'GET'
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
             <div className="col-md-11">
                  <h4 className = "text-bold">Request Sent Status </h4>
                  <p>Leave Application : {this.state.posts}</p> 
                
                </div>
      </div>
    )
  }
}

export default Requestsent
