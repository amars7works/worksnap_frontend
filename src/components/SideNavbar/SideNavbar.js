import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { SecureLogoutUser } from "../Networks/Auth";
import Dashboard from "@material-ui/icons/Dashboard";
import { EmployerAuthRoute } from "../SimplifiedAuthRoute";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function CustomNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const thisYear = (new Date()).getFullYear();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  // function monthYear(){
  //   console.log("monthYear function")
  //   this.setState({
  //     thisYear:evt.target.value

  //   })

  // }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            WorkSnap
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <h6>WorkSnap Summary </h6>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />


<EmployerAuthRoute >
         <List >
          {[ 
          
          <MenuItem component={Link} to = "/">
            Dashboard
            </MenuItem>,
          <MenuItem component={Link} to = "/frd/employees/">
            Employees           
            </MenuItem>,
            <MenuItem component={Link} to = "/">
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
</EmployerAuthRoute>


<div>

<List>
{[ 

<IconButton aria-label="Delete" className={classes.margin} size="small">
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




       




        {/* <Divider />
        <MenuList>
            <MenuItem component={Link} to = "/">
            Dashboard
            <Dashboard/>
<
            </MenuItem>

            <MenuItem component={Link} to = "/frd/employees/">
            Employees           
            </MenuItem>

            <MenuItem component={Link} to = "/frd/requests/">
            Leave Request
            </MenuItem>
            <MenuItem component={Link} to = "/frd/EmployeeList/">
            Employee List Table 
            </MenuItem>

            <MenuItem component={Link} to = "/" onClick={() => {SecureLogoutUser()}}>
            Logout
            </MenuItem>

            </MenuList>
            
            
            <Divider /> */}


        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

export default CustomNavigation;