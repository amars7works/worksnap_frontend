import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  './Dailyreport.css';


// import isAfter from "date-fns/isAfter";

const axios = require('axios');

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
            textinput_text:"",
            textinput1_text:"",
            textinput2_text:"",
            textinput3_text:"",
            textinput4_text:"",
  
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
                textinput_text:e.target.value,
                textinput1_text:e.target.value,
                textinput2_text:e.target.value,
                textinput3_text:e.target.value,
                textinput4_text:e.target.value,
              
            });
          }

        handleSubmit(e){
            // form.reset();  
            // var form = e.target;
            e.preventDefault();
              e.target.reset();
  

            let formData ={
               
                leave_start_data:this.state.startDate,
                textinput:this.state.textinput_text,
                textinput1:this.state.textinput1_text,
                textinput2:this.state.textinput2_text,
                textinput3:this.state.textinput3_text,
                textinput4:this.state.textinput4_text,


                
                
         }

         
                  

           
              axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data:[formData]
              })
              .then(function (response) {
                console.log(response);
              })
  
        }
  
        textinput(e){
            this.setState({
                textinput_text:e.target.value,
            })
        }
        
        textinput1(e){
            this.setState({
                textinput1_text:e.target.value,
            })
        }

        textinput2(e){
            this.setState({
                textinput2_text:e.target.value,
            })
        }

        textinput3(e){
            this.setState({
                textinput3_text:e.target.value,
            })
        }

        textinput4(e){
            this.setState({
                textinput4_text:e.target.value,
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
                 value={this.state.textinput_text} name="fname"/>


                <label for="lname">What is your plan for next day?</label>
                <input type="text" id="lname" ref="text1" onChange={this.textinput1}
                 value={this.state.textinput1_text} name="lname"/>


                <label for="fname">What are your blockers?</label>
                <input type="text" id="fname" ref="text2" onChange={this.textinput2}
                 value={this.state.textinput2_text} name="fname"/>


                <label for="lname">Do you have enough tasks to keep you busy for the next three days?</label>
                <input type="text" id="lname" ref="text3" onChange={this.textinput3}
                 value={this.state.textinput3_text} name="lname"/>


                <label for="fname">If you get stuck are you still able to work on something else?</label>
                <input type="text" id="fname" ref="text4" onChange={this.textinput4}
                 value={this.state.textinput4_text} name="fname"/>


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
