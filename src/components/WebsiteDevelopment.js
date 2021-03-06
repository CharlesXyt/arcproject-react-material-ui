import React from 'react'
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
import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

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
    paragraphContainer:{
        maxWidth:"25em"
    }

}))

export default function WebsiteDevelopment(props){
    
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const {setValue,setMenuItemSelected} = props

    return(
        <Grid container direction="column">
            <Grid item container justify={matchesMD ? "center": undefined}  className={classes.rowContainer} style={{marginTop:matchesXS ? "1em":"2em"}}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/mobileapp" onClick={()=>setMenuItemSelected(2)}>
                            <img src={backArrow} alt="back to services page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center":"inherit"}>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                        Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center":"inherit"}>
                            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/services" onClick={()=>setMenuItemSelected(0)}>
                            <img src={forwardArrow} alt="forward to andriod page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                    
            </Grid>
            <Grid item container className={classes.rowContainer} alignItems="center" direction={matchesSM ? "column" : "row"} style={{marginTop:"15em"}}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography  align="center" variant="h4" gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} alt="analytics" width="100%"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft:matchesSM ? 0 :"1em"}} >
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >It’s no secret that people like to shop online.</Typography>
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.</Typography>
                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} justify="flex-end" alignItems="center" direction={matchesSM ? "column" : "row"} style={{marginTop:"15em",marginBottom:"15em"}}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography  align="center" variant="h4" gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="ecommerce" width="100%"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft:matchesSM ? 0 :"1em"}} >
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.</Typography>

                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} alignItems="center" direction={matchesSM ? "column" : "row"} style={{marginBottom:"15em"}}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center"  variant="h4" gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="outreach" width="100%"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft:matchesSM ? 0 :"1em"}} >
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.</Typography>

                </Grid>
            </Grid>

            <Grid item container className={classes.rowContainer} justify="flex-end" alignItems="center" direction={matchesSM ? "column" : "row"} style={{marginBottom:"15em"}}>
                <Grid item >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography  align="center" variant="h4" gutterBottom>Search Engine <br/>Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="ecommerce" width="100%"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{marginLeft:matchesSM ? 0 :"1em"}} >
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >How often have you ever been to the second page of Google results?</Typography>
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >If you’re like us, probably never.</Typography>
                    <Typography variant="body1" align={matchesSM ? "center":undefined} paragraph >Customers don’t go there either, so we make sure your website is designed to end up on top.</Typography>
                </Grid>
            </Grid>
            

            <Grid item>
                <CallToAction setValue={setValue}/>
            </Grid>
        </Grid>
    )
}