import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Employees from '../Employees_List/Employees';
import TextField from '@material-ui/core/TextField';
import CustomNavigation from '../SideNavbar/SideNavbar';
import './Employeee.css';

// Total number of in Employer page
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 ,marginTop:0}}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1210,
    marginTop:0,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:'10vw !important',
  },
  container1: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:'4vw !important',
    marginTop:'0px  !important',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}));

function DatePickers() {
  const classes = useStyles();
}
function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
    <div>  <CustomNavigation/></div>
  
    <div className={classes.root} >
             


    <AppBar position="" display="inline-block" color="default" style={{marginTop:0,padding:0}}>
     <Tab label="Select date:" className={classes.container1}>
        </Tab> 
       <form className={classes.container} noValidate>
      <TextField
        id="date"
       type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </AppBar>
      <AppBar position="static" color="default">
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Total Employees" />
          <Tab label="Off day" />
          <Tab label="Work from home" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{marginLeft:100}}
      >
        <TabContainer dir={theme.direction}><Employees/></TabContainer>
        <TabContainer dir={theme.direction}>Off day</TabContainer>
        <TabContainer dir={theme.direction}>Work from home</TabContainer>
      </SwipeableViews>
    </div>
    </div>
  );
}

export default FullWidthTabs;