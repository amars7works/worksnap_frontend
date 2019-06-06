import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import SearchBar from 'material-ui-search-bar'
import './Employee_form.css';
import CustomNavigation from '../SideNavbar/SideNavbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { func } from 'prop-types';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
    overflow:'auto',
    [theme.breakpoints.up('xs')]: {
      marginRight: theme.spacing(2),
    overflow:'auto',
    marginLeft:'-10px',
    },
    [theme.breakpoints.between('sm','md')]: {
      marginRight: theme.spacing(2),
    overflow:'auto',
    marginLeft:'-10px',
    }
  },
 
  MuiInputroot: {
    position: 'relative',
    marginLeft: '22vw',
    marginTop: 24,
    [theme.breakpoints.up('xs')]: {
      position: 'relative',
      marginLeft: '16vw',
      marginTop: 24,
    },
    [theme.breakpoints.between('sm','md')]: {
       display: 'inline-flex',
      marginLeft: '22vw',
      marginTop: 10,
      width:253,
    }
},
row:
{
backgroundColor:'#A3B9FF',
height:75,
marginTop:-48,
width:'100%',
[theme.breakpoints.up('xs')]: {
  width: '100%',
  backgroundColor:'#A3B9FF',
  height:75,
  marginTop:0,
},

[theme.breakpoints.between('sm','md')]: {
  width: '100%',
  backgroundColor:'#A3B9FF',
  height:75,
  marginTop:0,
}

},
date_design:
{
marginLeft:20,
[theme.breakpoints.up('xs')]: {
  marginLeft: 6,
  width: 130,
  display:'block',
},
[theme.breakpoints.between('sm','md')]: {
  marginLeft: 6,
  width: 130,
  
}
},

works_option:{
  marginTop:20,
  marginLeft:'5vw',
  [theme.breakpoints.up('xs')]: {
    marginTop:20,
    marginLeft: '1vw',
    width: 75,
  },
  [theme.breakpoints.between('sm','md')]: {
    marginTop:20,
    marginLeft: '3vw',
    width: 145,
  }

},
button: {
  margin: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    margin: theme.spacing(1),
  },
  [theme.breakpoints.between('sm','md')]: {
    margin: theme.spacing(1),
  }
},
EmployeeNames:
{
marginTop:20,
marginLeft:'10vw',
[theme.breakpoints.up('xs')]: {
  marginTop:20,
  marginLeft: '1vw',
  width: 85,
},
[theme.breakpoints.between('sm','md')]: {
  marginTop:20,
  marginLeft: '18vw',
  width: 145,
},
[theme.breakpoints.up('lg')]: {
  marginTop:20,
  marginLeft: '26vw',
  width: 145,
}
},
 mainmenu : {
  width: '200px',
  height: '300px',
  overflow:'auto',
  [theme.breakpoints.up('xs')]: {
    width: '146px',
  height: '300px',
  overflow:'auto',
  marginLeft:-15,
  },
  [theme.breakpoints.between('sm','md')]: {
    width: '190px',
  height: '300px',
  overflow:'auto',
  marginLeft:-15,
  }
  
 },
 search_button:{
    margin:'0 auto',
    padding:0,
    maxWidth: 200,
    height:40,
    [theme.breakpoints.up('xs')]: {
      margin:'0 auto',
    padding:0,
    height:40,
    maxWidth: 170,
    marginLeft: 17,
},
[theme.breakpoints.between('sm','md')]: {
  margin:'0 auto',
padding:0,
height:40,
maxWidth: 170,
marginLeft: 17,
}
 },
 MuiTouchRipplerootutton:{
   marginLeft:'50vw',
   marginTop:20,
   borderRadius:20,

 } 
 
}));
//Employee form showing employee and work option of particular date 
function Employee_Form() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [Work, setWork] = React.useState('');
  const anchorRef = React.useRef(null);
 
  const [state, setState] = React.useState({
    checkedB: true,
 
   
  });
  
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  
   
 
  return (
    <div>

    <div>  <CustomNavigation/></div>
    <div className={classes.row}>
    <div className={classes.root}>
    <div className={classes.MuiInputroot}>  
        {/* Select the Date */}
    <label>Select date:</label>
   <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        className={classes.date_design}
        InputLabelProps={{
          shrink: true,
        }}
  
      />
      </div>
    {/* selecting wroking option  */}
      <div className={classes.works_option}>
      <select className="browser-default custom-select" >
      <option value="1">Select from list</option>
 <option value="1">Work from home</option>
  <option value="2">Works from office</option>
  <option value="3">None</option>
</select>
</div>
      
      <div className={classes.EmployeeNames}>
         <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
          mx={4.5}
    
        >
          Employee Names
         </Button> 
        {/* Creating dropmenu of employee name   */}

        <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className={classes.mainmenu}>
                  <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      className={classes.search_button}
      
    />
    <MenuItem > 
    <Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Manishankar</MenuItem>

                    <MenuItem > <Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />dileept</MenuItem>
                    <MenuItem ><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />vikaram</MenuItem>
                    <MenuItem ><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />sai kiran</MenuItem>
                    <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Dhananjay</MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Mohan Krishna</MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Eswar</MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />shrinivas</MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Susma </MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Ramya</MenuItem>
      <MenuItem><Checkbox
        // checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />Ananya</MenuItem>
      <MenuItem> <Button variant="contained" className={classes.button} onClick={handleClose} >
        Submit
      </Button></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
             
          )}
         
        </Popper>
    
      </div>
      </div>
      </div>
      <div  className={classes.MuiTouchRipplerootutton}>
      <Button variant="contained">
        Export 
      </Button>
      </div>
  
  
  </div>
   );
}

export default Employee_Form;
