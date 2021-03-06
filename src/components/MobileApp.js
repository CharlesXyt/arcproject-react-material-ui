import React from 'react'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import {
    Grid,
    Typography,
    useMediaQuery,
    IconButton,
    Hidden
} from '@material-ui/core'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'

import IntegrationAnimation from '../animations/integrationAnimation/data.json'

import CallToAction from './ui/CallToAction'

const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop:"0.5em"
    },
    rowContainer:{
        padding:"0em 5em 0em 5em",
        [theme.breakpoints.down('sm')]:{
            padding:"0em 1.5em 0em 1.5em",
        }
    },
}))


export default function MobileApp(props){
    
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const {setValue,setMenuItemSelected} = props

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: IntegrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


   return(
       <Grid container direction="column">
            <Grid item container justify={matchesMD ? "center": undefined}  className={classes.rowContainer} style={{marginTop:matchesXS ? "1em":"2em"}}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/customsoftware" onClick={()=>setMenuItemSelected(1)}>
                            <img src={backArrow} alt="back to services page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center":"inherit"}>iOS/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            Convenience. Connection.                        
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/websites" onClick={()=>setMenuItemSelected(3)}>
                            <img src={forwardArrow} alt="forward to andriod page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                    
            </Grid>

            <Grid item container className={classes.rowContainer} direction={matchesSM ? "column" : "row"} style={{marginTop:"15em",marginBottom:"15em"}}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.</Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.</Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth:"20em"}}/>
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : "right"} gutterBottom >Simultaneous Platform Support</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph >Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.</Typography>
                        <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph >This significantly reduces costs and creates a more unified brand experience across all devices.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={classes.rowContainer} direction={matchesMD ? "column" : "row"} style={{marginBottom:"15em"}}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4">Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss"/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md style={{marginBottom:matchesMD? "10em":0,marginTop:matchesMD? "10em":0}}>
                    <Grid item>
                        <Typography variant="h4">Extend Access</Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="access" style={{maxWidth:matchesXS ? "20em":"28em"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4">Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="engagement"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
       </Grid>
   )

}