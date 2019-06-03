import React, { Component } from 'react'
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import axios from 'axios'

// Worksnap download file
const thisYear = (new Date()).getFullYear();

export class WorksnapDownload extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit= this.handleSubmit.bind(this);
    
  

    this.state = {
      thisYear: thisYear,
      selectedYear: thisYear,
      // month:month,

        posts:[],

    }
}
handleSubmit(){
console.log("handle submit")
  const month = new Date().getMonth() ;
  const year = new Date().getFullYear();
  console.log(month,year)


}
componentDidMount(){
  const config = {
      url: "",
      method: 'POST',
      withCredentials: true,

  }
  axios(config)
  .then((res) => {
      this.setState({
          posts: res.data
      });

      console.log(res.data)
  });
  
}     
  render() {
    return (
      <div>
        <List>
{[ 

<IconButton aria-label="Delete"  size="small" onClick={this.handleSubmit }>
  {/* <ArrowDownwardIcon fontSize="inherit" /> */}
  WorkSnap Report
</IconButton>
    ].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <ArrowDownwardIcon />: <AccountCircle /> } </ListItemIcon> 

        <ListItemText primary={text} />
      </ListItem>
    ))} 
 </List>
      </div>
    )
  }
}

export default WorksnapDownload
