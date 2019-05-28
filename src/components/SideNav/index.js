import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../styles/SideNav.css';

export class SideNav extends Component {

  render() {
    return (
           <div className="Verical">
            <Nav>
             {/* <Nav.Link href="/Dashboard">Dashboard</Nav.Link>  */}
             <Nav.Link href="/frd/dailyreport/">Dailyreport</Nav.Link>
             <Nav.Link href="/Employee">Employee</Nav.Link>
             <Nav.Link href="/frd/emp/report">Worksnap Report</Nav.Link>
             <Nav.Link href="/frd/approve"> Approval</Nav.Link>
             <Nav.Link href="/frd/requests">Requests</Nav.Link>
             <Nav.Link href="/Pay slips">Pay slips</Nav.Link>
             </Nav>
          </div>
    )
  }
}

export default SideNav;
