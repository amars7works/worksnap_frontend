import React, { Component } from 'react'

const thisYear = (new Date()).getFullYear();
export class WorksnapDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisYear : new Date(),
            // selectedYear:thisyear

        };
        this.state.monthYear=this.state.monthYear.bind(this)
        
      }
      monthYear(e){
             console.log("monthYear function")

          this.setState({
            thisYear:e.target.value,

          })
      }
    render() {

        return (
            <div>
                
            </div>
        )
    }
}

export default WorksnapDownload
