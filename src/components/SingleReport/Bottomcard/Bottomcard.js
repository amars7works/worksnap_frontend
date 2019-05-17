import React, { Component } from 'react'

import './Bottomcard.css';
 class Bottomcard extends Component {
  
  render() { 
    return (
      <div>

        <div className="Bottom_card ">
            <div className="col-md-6">
           <p className="para"> Project report</p>
           <div className="para1">
           <p >what was done this day? </p>
           <p >what are your blocker? </p>
           <p >If you get struct are you still able to work on something else? </p>
            </div>
            </div>

            
            <div className="col-md-6">
            <div >
              <input type="date" name="date" className="input_date"/>
             </div>
            <div className="para2">
            
            <p >what is your plan on next day ? </p>
            <p >do you have enough task to keep you busy for next three days? </p>
            </div>
        
        </div>
        </div>
      </div>

    )
  }
}

export default Bottomcard;
