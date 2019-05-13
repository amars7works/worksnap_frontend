import React, { Component } from 'react'
import axios from 'axios';
export class Requestsent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts:[],

        }
    }
    componentDidMount(){
        const config = {
            url: "/api/get_requests/",
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
                  <h4 className = "text-bold" style={{textAlignLast:'Left',}}>Request Sent Status </h4>
                  <p style={{textAlignLast:'Left', display:'inline-block'}}>Leave Application :  {this.props.intialText} </p> 
                  {/* <span style={{fontSize:'12px', textAlignLast:'right'}} 
                  data={this.state.posts} 
                  value = {this.props.status}
                   onChange ={this.leaveRequestStatus}>  </span> */}
                   <span>
    
                   </span>
                </div>
      </div>
    )
  }
}

export default Requestsent
