import React,{useState,useEffect} from 'react'
import {makeStyles,useTheme} from '@material-ui/styles'
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem,
    SwipeableDrawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    useMediaQuery
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'


import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]: {
            marginBottom:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom:"1.25em"
        }
      },
      logo:{
          height:"8em",
          [theme.breakpoints.down("md")]:{
              height:"7em"
          },
          [theme.breakpoints.down("xs")]:{
            height:"5.5em"
        }
      },
      tabContainer:{
          marginLeft:'auto'
      },
      tab:{
          ...theme.typography.tab,
          minWidth:10,
          marginLeft:"25px"

      },
      button:{
          ...theme.typography.estimate,
          borderRadius:"50px",
          marginLeft:"50px",
          marginRight:"25px",
          height:"45px"
      },
      logContainer:{
          padding:0,
          "&:hover":{
              backgroundColor:"transparent"
          }
      },
      menu:{
          backgroundColor:theme.palette.common.blue,
          color:"white"
      },
      menuItem:{
          ...theme.typography.tab,
          opacity:0.7,
          "&:hover":{
            opacity:1
          }
      },
      drawerIconContainer:{
          marginLeft:'auto',
          "&:hover":{
              backgroundColor:"transparent"
          }
      },
      drawerIcon:{
          width:"50px",
          height:"50px"
      },
      drawer:{
          backgroundColor:theme.palette.common.blue
      },
      drawerItem:{
          ...theme.typography.tab,
          color:"white",
          opacity:0.7
      },
      drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
      },
      drawerItemSelectedStyle:{
        opacity:1
      }
  }))


export default function Header(props){

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [value,setValue] = useState(0)
    const [anchorEl,setAnchorEl] = useState(null)
    const [openMenu,setOpenMenu] = useState(false)
    const [menuItemSelected,setMenuItemSelected] = useState(-1)
    const [openDrawer,setOpenDrawer] = useState(false)
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    useEffect(()=>{
        switch(window.location.pathname){
            case "/":
                if(value !== 0){
                    setValue(0)
                }
                break;
            case "/services":
                if(value !== 1 || menuItemSelected !== 0){
                    setValue(1)
                    setMenuItemSelected(0)
                }
                break;
            case "/revolution":
                if(value !== 2){
                    setValue(2)
                }
                break;
            case "/about":
                if(value !== 3){
                    setValue(3)
                }
                break;
            case "/contact":
                if(value !== 4){
                    setValue(4)
                }
                break;
            case "/estimate":
                if(value !== 5){
                    setValue(5)
                }
                break;
            case "/customsoftware":
                if(value !== 1 || menuItemSelected !== 1){
                    setValue(1);
                    setMenuItemSelected(1)
                }
                break;
            case "/mobileapp":
                if(value !== 1 || menuItemSelected !== 2){
                    setValue(1);
                    setMenuItemSelected(2)
                }
                break;
            case "/websites":
                if(value !== 1 || menuItemSelected !== 3){
                    setValue(1);
                    setMenuItemSelected(3)
                }
                break;
            default:
                break;
        }
    },[value,menuItemSelected])

    const handleChange = (event,valuePassed) => {
        setValue(valuePassed)
        setMenuItemSelected(-1)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (event) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    
    const handleMenuItemClick = (event,index) => {
        handleClose();
        setValue(1);
        setMenuItemSelected(index)
    }

    const menuItem = [{name:"Services",link:"/services"},{name:"Custom Software Developement",link:"/customsoftware"},{name:"Mobile App Developement",link:"/mobileapp"},{name:"Website App Software Developement",link:"/websites"}]

    const tabs = (
        <React.Fragment>
            
                        
                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                            <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
                            <Tab 
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                className={classes.tab} 
                                component={Link} 
                                onMouseOver={(event) => handleClick(event)}
                                to="/services" 
                                label="Services"
                                ></Tab>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"></Tab>
                            <Tab className={classes.tab} component={Link} to="/about" label="About us"></Tab>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"></Tab>
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">
                            Free Estimate
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClose}
                            classes={{
                                paper:classes.menu
                            }}
                            MenuListProps={{
                                onMouseLeave:handleClose
                            }}
                            elevation={0}
                        >
                            {menuItem.map((item,index)=>{
                                return (
                                    <MenuItem key={item} classes={{root:classes.menuItem}} onClick={(event) => handleMenuItemClick(event,index)} component={Link} to={item.link} selected={index === menuItemSelected}>{item.name}</MenuItem>
                                )
                            })}                          
                        </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS} 
            open={openDrawer}
             onClose={()=> setOpenDrawer(false)} 
             onOpen={() => setOpenDrawer(true)}
             classes={{paper:classes.drawer}}
             >
                <List disablePadding>
                    <ListItem className={value===0 ? [classes.drawerItem,classes.drawerItemSelectedStyle].join(" ") : classes.drawerItem} divider button onClick={() => {setOpenDrawer(false); setValue(0)}} component={Link} to="/" selected={value === 0}>
                        <ListItemText  disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem className={value===1 ? [classes.drawerItem,classes.drawerItemSelectedStyle].join(" ") : classes.drawerItem} divider button onClick={() => {setOpenDrawer(false); setValue(1)}} component={Link} to="/services" selected={value === 1}>
                        <ListItemText  disableTypography>Services</ListItemText>
                    </ListItem>
                    <ListItem className={value===2 ? [classes.drawerItem,classes.drawerItemSelectedStyle].join(" ") : classes.drawerItem} divider button onClick={() => {setOpenDrawer(false); setValue(2)}} component={Link} to="/revolution" selected={value === 2}>
                        <ListItemText  disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem className={value===3 ? [classes.drawerItem,classes.drawerItemSelectedStyle].join(" ") : classes.drawerItem} divider button onClick={() => {setOpenDrawer(false); setValue(3)}} component={Link} to="/about" selected={value === 3}>
                        <ListItemText  disableTypography>About us</ListItemText>
                    </ListItem>
                    <ListItem className={value===4 ? [classes.drawerItem,classes.drawerItemSelectedStyle].join(" ") : classes.drawerItem} divider button onClick={() => {setOpenDrawer(false); setValue(4)}} component={Link} to="/contact" selected={value === 4}>
                        <ListItemText  disableTypography>Contact Us</ListItemText>
                    </ListItem>
                    <ListItem className={value===5 ? [classes.drawerItem,classes.drawerItemEstimate,classes.drawerItemSelectedStyle].join(" "):[classes.drawerItem,classes.drawerItemEstimate].join(" ")} divider button onClick={() => {setOpenDrawer(false); setValue(5)}} component={Link} to="/estimate" selected={value === 5}>
                        <ListItemText  disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
        
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" disableRipple className={classes.logContainer} onClick={() => {setValue(0)}}>
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
        
        
    )
}