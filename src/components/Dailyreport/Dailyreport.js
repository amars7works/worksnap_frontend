import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  './Dailyreport.css';
import axios from 'axios'


// import isAfter from "date-fns/isAfter";

// const axios = require('axios');

class Dailyreport extends Component {

    constructor(props) {
        super(props);

        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.textinput=this.textinput.bind(this)
        this.textinput1=this.textinput1.bind(this)
        this.textinput2=this.textinput2.bind(this)
        this.textinput3=this.textinput3.bind(this)
        this.textinput4=this.textinput4.bind(this)

  
        this.state = {
           
            startDate:new Date(),
            what_was_done_this_day:"",
            what_is_your_plan_for_the_next_day:"",
            what_are_your_blockers:"",
            do_you_have_enough_tasks_for_next_three_days:"",
            if_you_get_stuck_are_you_still_able_to_work_on_something_else:"",
  
          };
      
           
        }

        handleChange = ({ startDate}) => {
            startDate = startDate || this.state.startDate;
        
            // if (isAfter(startDate, endDate)) {
            //    startDate;

            this.setState({ startDate });
          };
        
          handleChangeStart = startDate => this.handleChange({ startDate });


          onHandleChange(e) {
            this.setState({
                startDate:e.target.value,
                what_was_done_this_day:e.target.value,
                what_is_your_plan_for_the_next_day:e.target.value,
                what_are_your_blockers:e.target.value,
                do_you_have_enough_tasks_for_next_three_days:e.target.value,
                if_you_get_stuck_are_you_still_able_to_work_on_something_else:e.target.value,
              
            });
          }
        

          handleSubmit(e) { 
      
            e.preventDefault();
           
           
               
              
            let formData ={
               
              what_was_done_this_day:this.state.what_was_done_this_day,
              what_is_your_plan_for_the_next_day:this.state.what_is_your_plan_for_the_next_day,
              what_are_your_blockers:this.state.what_are_your_blockers,
              do_you_have_enough_tasks_for_next_three_days:this.state.do_you_have_enough_tasks_for_next_three_days,
              if_you_get_stuck_are_you_still_able_to_work_on_something_else:this.state.if_you_get_stuck_are_you_still_able_to_work_on_something_else,
      
      
                      
                      
               }
      
               console.log("formData",formData.requestType)
               
                  
                  const config = {
                    method: 'POST',
                    url: '/api/user_daily_report/',
                    withCredentials: true,
                    data: formData
                  }
                  axios(config).then((response) => {
                    console.log(response.data)
                  });
    
    
                  console.log(formData)
    
                  this.resetMyForm();
                }
    
            
        resetMyForm(e){
          this.setState({
            what_was_done_this_day:"",
            what_is_your_plan_for_the_next_day:"",
            what_are_your_blockers:"",
            do_you_have_enough_tasks_for_next_three_days:"",
            if_you_get_stuck_are_you_still_able_to_work_on_something_else:"",
          })
      }
  
        textinput(e){
            this.setState({
              what_was_done_this_day:e.target.value,
            })
        }
        
        textinput1(e){
            this.setState({
              what_is_your_plan_for_the_next_day:e.target.value,
            })
        }

        textinput2(e){
            this.setState({
              what_are_your_blockers:e.target.value,
            })
        }

        textinput3(e){
            this.setState({
              do_you_have_enough_tasks_for_next_three_days:e.target.value,
            })
        }

        textinput4(e){
            this.setState({
              if_you_get_stuck_are_you_still_able_to_work_on_something_else:e.target.value,
            })
        }
            
  render() {
    return (
      <div>
        <div className="col-md-9 col-sm-12 Dailyreport">
        <form onSubmit={this.handleSubmit}>

            <Card>
            <Card.Header>
                <div className="row">
                <div className="col-md-9 title">
                <h3>Daily Report</h3>
                </div>
                <div className="date">    
                    <DatePicker 
                       className="form-control" 
                        name = "range1"
                        ref="range1"
                        id="range1"
                        value={this.state.data_start} 
                        placeholderText="Click to select a date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        onChange={this.handleChangeStart}
                    // dateFormat="MM/DD/YYYY"
                    />
                    </div>
                    </div>
                    </Card.Header>

            <Card.Body>
           

                <label for="fname">What was done this day?</label>
                <input type="text" id="fname" ref="text" onChange={this.textinput}
                 value={this.state.what_was_done_this_day} name="fname"/>


                <label for="lname">What is your plan for next day?</label>
                <input type="text" id="lname" ref="text1" onChange={this.textinput1}
                 value={this.state.what_is_your_plan_for_the_next_day} name="lname"/>


                <label for="fname">What are your blockers?</label>
                <input type="text" id="fname" ref="text2" onChange={this.textinput2}
                 value={this.state.what_are_your_blockers} name="fname"/>


                <label for="lname">Do you have enough tasks to keep you busy for the next three days?</label>
                <input type="text" id="lname" ref="text3" onChange={this.textinput3}
                 value={this.state.do_you_have_enough_tasks_for_next_three_days} name="lname"/>


                <label for="fname">If you get stuck are you still able to work on something else?</label>
                <input type="text" id="fname" ref="text4" onChange={this.textinput4}
                 value={this.state.if_you_get_stuck_are_you_still_able_to_work_on_something_else} name="fname"/>


                <button type="submit" className="btn btn-primary">Submit</button>

            </Card.Body>
            </Card>
        
            </form>

           
        </div>
      </div>
    )
  }
}

export default Dailyreport
