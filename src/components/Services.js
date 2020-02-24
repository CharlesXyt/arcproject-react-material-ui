import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {
    Grid,
    Button,
    Typography,
    useMediaQuery
    
} from '@material-ui/core'


import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'


const useStyles = makeStyles(theme => ({
    icon:{
        marginLeft:"2em",
        width:"15em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0,
            width:"8em"
        }
    },
    serviceContainer:{
        marginTop:"10em",
        [theme.breakpoints.down("sm")]:{
            padding:"2em"
        }
    },
    specialText:{
        fontFamily:"Pacifico",
        color:theme.palette.common.orange
    },
    subtitle:{
        marginBottom:"1em"
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        [theme.breakpoints.down('sm')]:{
            marginBottom:"2em"
        }
    },
}))


export default function Services(props){

    const classes = useStyles() 
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const {setValue,setMenuItemSelected} = props


    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h2" gutterBottom style={{marginLeft:matchesSM ? 0 : "2em",marginTop:matchesSM ? "1em" : "2em"}} align={matchesSM ? "center":undefined}>
                    Services
                </Typography>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{marginTop:matchesSM ? "1em":"5em"}}>
                    <Grid item style={{textAlign:matchesSM ? "center" : undefined,width:matchesSM ? undefined:"35em"}}>
                        <Typography variant="h4">
                            IOS/Andriod App Development 
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integration your web experience or create a standalone{matchesSM ? null : <br/>}
                            with either mobile platform. 
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} to="/mobileapp" onClick={() => {setValue(1);setMenuItemSelected(2)}}>Learn more</Button>
                    </Grid>
                    <Grid item  style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt="mobile icon"  src={mobileAppsIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign:matchesSM ? "center" : undefined,width:matchesSM ? undefined:"35em"}}>
                        <Typography variant="h4">
                            Custom Software Development 
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solution, from investigation to{" "}
                            <span className={classes.specialText}>
                                celebration
                            </span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} to="/customsoftware" onClick={() => {setValue(1);setMenuItemSelected(1)}}>Learn more</Button>
                    </Grid>
                    <Grid item >
                        <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>

            

            <Grid item>
                <Grid container className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} style={{marginBottom:"10em"}}>
                    <Grid item style={{ textAlign:matchesSM ? "center" : undefined, width:matchesSM ? undefined:"35em"}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link} to="/websites" onClick={() => {setValue(1);setMenuItemSelected(3)}}>Learn more</Button>
                    </Grid>
                    <Grid item  style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt="Website icon" src={websitesIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}