import React, { Component } from 'react'
import NavBar from './Navbar/NavBar';
import TopCard from './Topcard/TopCard';
// import Bottomcard from './Bottomcard/Bottomcard';

export class SingleReport extends Component {
  render() {
    return (
      <div className = "right-content">
       <NavBar />
       <TopCard />
       {/* <Bottomcard /> */}
      </div>
    )
  }
}

export default SingleReport;
