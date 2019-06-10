import React, { Component } from "react";
import axios from "axios";
import "./DailyreportAdmin.css";
import CustomNavigation from "../SideNavbar/SideNavbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class DailyreportAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentTab: -1,
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }
 
  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    // if (isAfter(startDate, endDate)) {
    //   endDate = startDate;
    // }
    //console.log(startDate, endDate)
    this.setState({ startDate, endDate });
  };

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });


  handleClick(currentTab) {
    this.setState({ currentTab });
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

      // console.log(res.data)
    });
  }


  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two', className: 'myOptionClassName' },
      {
        type: 'group', name: 'project Name', items: [
          { value: 'three', label: 'JVB', className: 'myOptionClassName' },
          { value: 'four', label: 'Worksnap' }
        ]
      },
      {
        type: 'group', name: 'Employe Name', items: [
          { value: 'five', label: 'Sai Kiran' },
          { value: 'six', label: 'Vikram' }
        ]
      }
    ];

    const defaultOption = options[0];
    
    return (
      <div>
        <CustomNavigation />

        <div className="report">
          <div>
            <h2>Daily Report Status</h2>
            <div className="left-col">

            </div>
            <div className="filter">
            
            <DatePicker
                        className="form-control"
                        name="range1"
                        ref="range1"
                        id="range1"
                        value={this.state.data_start}
                        placeholderText="Click to select a date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                        // dateFormat="MM/DD/YYYY"
                      />
                      <DatePicker
                        className="form-control"
                        ref="range"
                        name="range"
                        id="range"
                        value={this.state.data_end}
                        placeholderText="Click to select a date"
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        //  dateFormat="MM/DD/YYYY"
                      />
            </div>


            <div className="tab">




                <Dropdown options={options}
                  onChange={this._onSelect}
                  value={defaultOption}
                  placeholder="Select an option">

                </Dropdown>

              




              {this.state.posts.map((post, i) => (
                <button
                  key={post.username}
                  className="tablinks"
                  onClick={() => this.handleClick(i)}
                >
                  <p>{post.username}</p>
                </button>
              ))}
            </div>

            <div className="tabcontent">
              {this.state.currentTab !== -1 && (
                <React.Fragment>
                  <h3>{this.state.posts[this.state.currentTab].username}</h3>
                  <p>
                    {this.state.posts[this.state.currentTab].Type_of_Request}
                  </p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyreportAdmin;
