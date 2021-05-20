import React, {useState, useEffect} from 'react';
import '../Assets/Css/Navbar.css';
import Logo from '../Assets/Icons/Logo2.png';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Grid,
  Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link as RouterLink} from 'react-router-dom';

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Solar Solution',
    href: '/Solar_Solution',
  },
  {
    label: 'About Solar Energy',
    href: '/About',
  },
  {
    label: 'The Team',
    href: '/team',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
];

const useStyles = makeStyles((theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    margin: '0px',
  },

  AppBar: {
    height: 90,
    display: 'grid',
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
  },
  mainLogo: {
    color: '#a1a1a1',
    justifyContent: 'left',
    '&:hover': {
      background: 'transparent',
    },
  },
  Button: {
    background: 'red',
  },
  avatar: {
    width: '98px',
    height: '100%',
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
  link: {
    paddingRight: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  grid: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  grid1: {
    justifyContent: 'flex-start',
    textAlign: 'left',
  },

  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Gotham-Book',
    fontSize: '15px',
    marginLeft: '90px',
    color: '#3B3B40',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '40px',
    },
  },
  "@media (min-width: 1024px) and (max-width: 1441px)": {
    menuButton: {
      marginLeft: '25px !important'
    }
  },
  "@media (min-width: 1441px) and (max-width: 2561px)": {
    menuButton: {
      marginLeft: '25px !important'
    }
  },
  "@media (min-width: 768px) and (max-width: 1025px)": {
    menuButton: {
      marginLeft: '10px !important',
      fontSize: '12px',
    },

  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    AppBar: {
      width: '33.65rem'
    },

  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
    paddingLeft: '50px',
    paddingRight: '100px'
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { logo, menuButton, toolbar, drawerContainer} = useStyles();
  
  
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const {mobileView, drawerOpen} = state;
  
  useEffect(() => {
    
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({...prevState, mobileView: true}))
        : setState((prevState) => ({...prevState, mobileView: false}));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Grid container style={{gridColumnGap: '0px', alignItems: 'center'}}>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={1} sm={1}>
            {mainlogo}
          </Grid>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={8} sm={8}>
            <div className="menu">
              {getMenuButtons()}
              <RouterLink to='/Contact' className="contactButton">Contact</RouterLink>
            </div>
          </Grid>
          <Grid item xs={1} sm={1}></Grid>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({...prevState, drawerOpen: true}));
    const handleDrawerClose = () =>
      setState((prevState) => ({...prevState, drawerOpen: false}));

    return (
      <Toolbar>
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
            <RouterLink to='/Contact' className="contactButton">Contact</RouterLink>
          </div>
        </Drawer>
        <Grid container style={{gridColumnGap: '0px', alignItems: 'center'}}>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={2} sm={2}>
            <div>{mainlogo}</div>
          </Grid>
          <Grid item xs={7} sm={7}></Grid>
          <Grid item xs={1} sm={1}>
            <Toolbar>
              <IconButton
                {...{
                  edge: 'start',
                  color: 'inherit',
                  'aria-label': 'menu',
                  'aria-haspopup': 'true',
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Grid>
          <Grid item xs={1} sm={1}></Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({label, href}) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: {textDecoration: 'none'},
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const mainlogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <Avatar src={Logo} className={classes.avatar} />
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({label, href}) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <Grid>
      <AppBar position="static" color="default" className={classes.AppBar}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Grid>
  );
};

export default Navbar;
