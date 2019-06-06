import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import FolderIcon from '@material-ui/icons/Folder';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { func } from 'prop-types';


const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

  Form_design:
  {
      margin:70,
      width:"80%",
      height:460,
      background:'#E3CED7',
      padding:30,
      borderRadius:10

  },
  label_design:{
    //   marginLeft:20
    color:'#5380F7'
  },
  button: {
    margin: theme.spacing(1),
    width:20,
    // position:"absolute",
    float:"right",
    borderRadius:15,
    background:"gray",
    color:'#641E16',
    marginLeft:"25vw",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));
function DatePickers() {
    const classes = useStyles();
}  



function Employee_form() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [Work, setWork] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const label=React.useState(false);

  function handleChange(event) {
    setWork(event.target.value);
  }
  
  function handleClose() {
    setOpen(false);
  }
  
  function handleOpen() {
    setOpen(true);
  }
  // function Listofemployees()
  // {
  //   {this.state.label}
  // }

  return (
      <div>
      <div className={classes.Form_design}>
          <label className={classes.label_design} >Select Date</label>  
        <TextField
        id="date"
        // label="Select Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

<form autoComplete="off">
<label className={classes.label_design}>Select Work Option </label> 
      {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}
   
      <FormControl className={classes.formControl}>
        {/* <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel> */}
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Work}
          onChange={handleChange}
          inputProps={{
            name: 'work_from_home',
            id: 'demo-controlled-open-select',
          }}
        >
         
          <MenuItem value="work_from_home">Work from home</MenuItem>
          <MenuItem value="work_from_office">work from office</MenuItem>
          <MenuItem value="None">None</MenuItem>
        </Select>
      </FormControl>
    </form>



       {/* <label className={classes.label_design}>Work from home</label> */}
    <div className={classes.root}>
      <FormGroup >
        <FormControlLabel
          control={
            <Checkbox
            //   checked={dense}
              onChange={event => setDense(event.target.checked)}
            //   value="dense"
            />
          }
          label="Mani shankar"
        />

       
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={event => setSecondary(event.target.checked)}
            //   value="secondary"
            />
          }
          label="Dileep kumar"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={event => setSecondary(event.target.checked)}
            //   value="secondary"
            />
          }
          label="Eswar"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={event => setSecondary(event.target.checked)}
            //   value="secondary"
            />
          }
          label="Vikram"
        />
        
        <FormControlLabel
          control={
            <Checkbox
            //   checked={secondary}
              onChange={event => setSecondary(event.target.checked)}
            //   value="secondary"
            />
          }
          label="Sai kiran"
        />
        
        <FormControlLabel
          control={
            <Checkbox
            //   checked={secondary}
              onChange={event => setSecondary(event.target.checked)}
            //   value="secondary">
            />
          }
          label="Dhananjay"
        />
        
         <Button variant="contained" color="" className={classes.button}>
        Submit
      </Button>
        

       </FormGroup>
       {/* {Listofemployees} */}
       
       </div>
       </div>
    </div>
  );
}

export default Employee_form;