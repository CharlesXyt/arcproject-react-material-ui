import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem
} from '@material-ui/core'
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
          marginBottom:"3em"
      },
      logo:{
          height:"8em"
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
      }
  }))


export default function Header(props){

    const classes = useStyles()
    const [value,setValue] = useState(0)
    const [anchorEl,setAnchorEl] = useState(null)
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        if(window.location.pathname === "/" && value!== 0){
            setValue(0)
        }else if(window.location.pathname === "/services" && value!== 1){
            setValue(1)
        }else if(window.location.pathname === "/revolution" && value!== 2){
            setValue(2)
        }else if(window.location.pathname === "/about" && value!== 3){
            setValue(3)
        }else if(window.location.pathname === "/contact" && value!== 4){
            setValue(4)
        }else if(window.location.pathname === "/estimate" && value!== 5){
            setValue(5)
        }
    },[value])

    const handleChange = (event,valuePassed) => {
        setValue(valuePassed)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = (event) => {
        setAnchorEl(null)
        setOpen(false)
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" disableRipple className={classes.logContainer} onClick={() => setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        
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
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                onMouseLeave:handleClose
                            }}
                        >
                            <MenuItem onClick={() => {handleClose();setValue(1)}} component={Link} to="/services">Services</MenuItem>
                            <MenuItem onClick={() => {handleClose();setValue(1)}} component={Link} to="/customsoftware">Custom Software Developement</MenuItem>
                            <MenuItem onClick={() => {handleClose();setValue(1)}} component={Link} to="/mobileapp">Mobile App Developement</MenuItem>
                            <MenuItem onClick={() => {handleClose();setValue(1)}} component={Link} to="/websites">Website App Software Developement</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
        
        
    )
}