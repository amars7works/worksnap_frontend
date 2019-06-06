import React, { Component } from 'react';
import { Input } from "reactstrap";
import './Worksnap_Report.css';
import axios from "axios";

export class WorksnapReport extends Component {

    constructor(props) {
        super(props);
    
        this.selectOptions = this.selectOptions.bind(this);

        this.state = {
          
         
         selected_option: "",
          posts:[],

        };
      }

      handleSubmit(){
        console.log("handle submit")
          const year = new Date().getFullYear();
          // console.log(year,posts)

          // posts ={
          //   month:this.state.selected_option,
          // }
        
        
        }

     
    componentDidMount() {
      
    }


    selectOptions(e) {
      const year = new Date().getFullYear();
      let value = e.target.value;
      console.log("year is",year)
      console.log("value is",value)
      const config = {
        url: "/api/user_report/",
        method: "GET",
        withCredentials: true,
        params:{
          month:value,
          year:year,
          user_name	:'all',

        }
        // posts:[]

      };
      axios(config).then(res => {
        console.log("response is:",res.data)
        this.setState({
          posts: res.data
        });
  
        // console.log(res.data)
      });
      this.setState({
        selected_option: value
      });
    }



  render() {
    const { CustomNavigation } = this.props;

    return (
      <div>
                <CustomNavigation />
                <div className="container">

          <div className="Work_snapReport">
          <h4>Work Snap Employees Report</h4>
          <div className="col-md-3 Work_snapReport">

          <Input
                      type="select"
                      className="custom-select"
                      name="selected_option"
                      value={this.state.selected_option}
                      ref="selected_option"
                      id="selected_option"
                      onChange={this.selectOptions}
                      // onClick={this.handleSubmit}
                    >
                      <option value="">select Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Input>
        </div>
        


       
      </div>

        </div>
        <div className="col-md-8 Report">

       
      </div>
      </div>

    )
  }
}

export default WorksnapReport
