import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import ReactTable from 'react-table';
// import ExportToExcel from './ExportToExcel'
import "react-table/react-table.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Api.css"
import YearMonthPicker from 'react-year-month-picker'

export class Api extends Component {

    constructor(props) {
        super(props);
    
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    
        this.state = {
          
          startDate: new Date(),
          endDate: new Date(),
          posts:[],
          scheduled: null

        };
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
    handleChange (m) {
      this.setState({scheduled: m}, () => console.log(this.state.scheduled))
    }
     
  render() {
    const columns =[
        {
            Header:"User ID",
            accessor : "id"
        },
        {
          Header:"Username",
          accessor : "username"
      },
      
      {
          Header:"Street",
          accessor : "street"
      },
      {
        Header:"Street",
        accessor : "street"
    },
    {
        Header:"Name",
        accessor : "name"
    },
    {
        Header:"City",
        accessor : "city"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    },
    {
        Header:"Zipcode",
        accessor : "zipcode"
    }
    ]
    return (
      <div>
          <div className="row">
          <div className="col-md-6 Work_snapReport">
          <h4>Work Snap Employees Report</h4>
        </div>
        


      <div>
        <YearMonthPicker
          closeOnSelect
          onChange={this.handleChange.bind(this)}
        />
      </div>

        </div>
        <div className="col-md-8 Report">


        
      <ReactTable 
      columns={columns}
      data={this.state.posts}
      filterable
      defaultPageSize={100}
      // defaultPageSize={20}
      showPagination={false}
      style={{
        height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
      }}
      >
        {/* {(state,filteredDate,instance) => {
          this.reactTable = state.pageRows.map(post=>{return post._original});
          return(
            <div>
              {filteredDate()}
              <ExportToExcel posts={this.ReactTable}/>
            </div>
          )
        }} */}





          </ReactTable>
       
        </div>
      </div>
    )
  }
}

export default Api
