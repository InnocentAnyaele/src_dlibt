// import React from 'react'
// import {makeStyles, useTheme} from '@material-ui/core/styles'
// import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'

// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import HomeIcon from '@material-ui/icons/Home'
// import VideoIcon from '@material-ui/icons/VideoLibrary'



// const useStyles = makeStyles((theme) => ({
//     drawerPaper: {
//         width: 'inherit'
//     },
//     link: {
//         textDecoration: 'none',
//         color: theme.palette.text.primary
//     }
// }))

// const SideBar = () => {
//     const classes = useStyles()

//     return (
//         <div style={{display: 'flex'}}>
//         <Drawer style={{width: "220px"}} variant="persistent" anchor="left" open={true} classes={{paper: classes.drawerPaper}} >
//             <List>
            // <Link to="/studentWelcome" className={classes.link}>
            // <ListItem button>
            //         <ListItemIcon>
            //             <HomeIcon/>
            //         </ListItemIcon>
            //         <ListItemText primary={"Home"} />
            //     </ListItem>
            // </Link>
            // <Link to="/studentSeminar" className={classes.link}>
            // <ListItem button>
            //         <ListItemIcon>
            //             <VideoIcon/>
            //         </ListItemIcon>
            //         <ListItemText primary={"Seminars"} />
            //     </ListItem>
            // </Link>
//             </List>
//         </Drawer>

//         </div>
//     )
// }


import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link, Redirect} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import VideoIcon from '@material-ui/icons/VideoLibrary'
import LogoutIcon from '@material-ui/icons/ExitToApp';
import logo from '../../../assets/img/datalink.png'
import NewsIcon from '@material-ui/icons/Announcement'
import InfoIcon from '@material-ui/icons/Info'
import PaymentIcon from '@material-ui/icons/Payment'
import ListIcon from '@material-ui/icons/List'
import BookIcon from '@material-ui/icons/Book'
import ShopIcon from '@material-ui/icons/AddShoppingCart'
import PollIcon from '@material-ui/icons/Poll'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
}));

export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    document.title ='DLIBT SRC - Student';
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    sessionStorage.setItem('token', null)
    sessionStorage.clear()
    return (
      <Redirect to={'/'} />
    )
  }

  if (sessionStorage.getItem('studenttoken') !== null){
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              <span style={{fontFamily: "'Montserrat', sans-serif"}}>Student Page</span>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            <span><img src={logo} style={{height: "30px", width: "30px", paddingRight: "2px"}} alt="logo"/> <b style={{fontFamily: "'Montserrat', sans-serif"}}>Student Page</b></span>
          </div>
          <Divider />
          <List>
            <Link to="/studentWelcome" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <HomeIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Home"} />
                  </ListItem>
              </Link>
              <Link to="/studentGallery" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <PhotoLibraryIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Gallery"} />
                  </ListItem>
              </Link>
              <Link to="/studentSeminar" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <VideoIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Seminars"} />
                  </ListItem>
              </Link>
              <Link to="/studentNews" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <NewsIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"News and Events"} />
                  </ListItem>
              </Link>
              <Link to="/studentInfo" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <InfoIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Student Information"} />
                  </ListItem>
              </Link>
              <Link to="/studentBudget" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <PaymentIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Budget"} />
                  </ListItem>
              </Link>
              <Link to="/studentTimeTable" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <ListIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Time Table"} />
                  </ListItem>
              </Link>
              <Link to="/studentHandout" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <BookIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Handouts"} />
                  </ListItem>
              </Link>
              <Link to="/studentECommerce" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <ShopIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"E-commerce"} />
                  </ListItem>
              </Link>
              <Link to="/studentPoll" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <PollIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Poll"} />
                  </ListItem>
              </Link>
              <Link to="/studentMessage" className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <ContactMailIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Message"} />
                  </ListItem>
              </Link>
              <Link to="/studentApplication" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon/>
                  </ListItemIcon>
                    <ListItemText primary={"Application"} />
                </ListItem>
              </Link>
              <Link to="/studentPassword" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <LockIcon/>
                  </ListItemIcon>
                    <ListItemText primary={"Password"} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
            <Link onClick={logout} className={classes.link}>
              <ListItem button>
                      <ListItemIcon>
                          <LogoutIcon/>
                      </ListItemIcon>
                      <ListItemText primary={"Logout"} />
                  </ListItem>
              </Link>
            </List>
        </Drawer>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
              <StudentWelcome/>
        </main> */}
      </div>
    );
  } else {
    return (
      <Redirect to={'/'} />
    )
  }

}
