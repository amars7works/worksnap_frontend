import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { SecureLogoutUser } from "../Networks/Auth";
import Dashboard from "@material-ui/icons/Dashboard";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: "none"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,

    whiteSpace: "nowrap"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0)
  }
}));

function EmployeeNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            WorkSnap
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
      
        <div className={classes.toolbar}
        
        />


        <Divider />
        <List>
          {[ 
          
          <MenuItem component={Link} to = "/">
            Dashboard
            </MenuItem>,
          <MenuItem component={Link} to = "/frd/dailyreport/">
          Daily Report            
          </MenuItem>,

            <MenuItem component={Link} to = "/frd/requests/">
            Leave Request
            </MenuItem>,

            <MenuItem component={Link} to = "/" onClick={() => {SecureLogoutUser()}}>
            Logout
            </MenuItem>,
             ].map((text, index) => (
            <ListItem button key={text}>
               <ListItemIcon>{index % 2 === 0 ? <Dashboard />: <AccountCircle /> } </ListItemIcon> 

               <ListItemText primary={text} />
            </ListItem>
          ))} 
         </List> 



        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default EmployeeNavigation;
