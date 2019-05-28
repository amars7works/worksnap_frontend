import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useStyles from '@material-ui/core/useStyles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Card} from 'react-bootstrap'
import axios from 'axios'

class Employees extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            posts:[],
    
        }
    }


    componentDidMount(){
        const config = {
            url: "/api/get_emp_list/",
            method: 'GET',
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

    function TabContainer({ children, dir }) {
      return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
          {children}
        </Typography>
      );
    }
    
    TabContainer.propTypes = {
      children: PropTypes.node.isRequired,
      dir: PropTypes.string.isRequired,
    };
    
  useStyles() { makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 1300,

  },
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}))}
    
  FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
   
  function  handleChange(event, newValue) {
      setValue(newValue);
    
    }
    function handleChangeIndex(index) {
      setValue(index);
    }
   
  return (
 
    <div className={classes.root}>
     <Grid item xs={6}>
          <Paper  className={classes.paper}>xs=6</Paper>
        </Grid>

    <Grid item xs={6}>
          <Paper className={classes.paper}>xs=12
          
          
          <AppBar position="absolute" color="default" >
          Total Report
      
          <form className={classes.container} noValidate>
    <TextField
      id="date"
      label="Select date:"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>


         
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        
        >
          
          <Tab label="Total" />
          <Tab label="Off day" />
          <Tab label="Work from home" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      
      >
        <TabContainer dir={theme.direction}>
        
        { this.state.posts.map(post => 
      <Card className="employCard" style={{ width: '14rem' }}>
        <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre" width="100" height="100"/> 
                <Card.Body>
                    <Card.Title><h5>{post.username}</h5></Card.Title>
                    <Card.Text>
                   Web Developer
                    </Card.Text>
                </Card.Body>
                
               
        </Card>
  )}
        </TabContainer>
        <TabContainer dir={theme.direction}>Off day</TabContainer>
      <TabContainer dir={theme.direction}>Work from home</TabContainer>
      </SwipeableViews>
          
          </Paper>

        </Grid>
      
    </div>
  )
    

        
}}


export default Employees;
