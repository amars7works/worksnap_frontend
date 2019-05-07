import React, { Component } from 'react'

export class Requestsent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
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
          
             <div className="col-md-11">
                  <h4 className = "text-bold" style={{textAlignLast:'Left',}}>Request Sent Status </h4>
                  <p style={{textAlignLast:'Left', display:'inline-block'}}>Leave Application : </p> 
                  <span style={{fontSize:'12px', textAlignLast:'right'}} 
                  data={this.state.posts} 
                  value = {this.status}
                   onChange ={this.leaveRequestStatus}> Status Pending </span>
                
            
                </div>
      </div>
    )
  }
}

export default Requestsent
