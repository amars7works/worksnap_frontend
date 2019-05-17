import React from 'react';
import '../styles/EmployeeReport.css';
import TopNav from '../components/TopNav';
import SingleReport from '../components/SingleReport';
import SideNav from '../components/SideNav';

class EmployeeReport extends React.Component {

  render() {
    return (

    <div className ="app">

      <TopNav />
      <div className ="down-div">
      <div className = "left-vertical">
      <SideNav />
      </div>
      <div className = "right-main-content">
      <SingleReport />
      </div>
      </div>
    </div>
    )
  }
}

export default EmployeeReport;

