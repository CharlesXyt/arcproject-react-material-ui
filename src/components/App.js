import React,{useState} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import theme from './ui/theme'
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApp from './MobileApp'
import Websites from './WebsiteDevelopment'
import Revolution from './Revolution'
import About from './About'
import Contact from './Contact'
import Estimate from './Estimate'

function App(props) {

  const [menuItemSelected,setMenuItemSelected] = useState(-1)
  const [value,setValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} menuItemSelected={menuItemSelected} setMenuItemSelected={setMenuItemSelected}/>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/services" render={(props) => <Services {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/customsoftware" render={(props) => <CustomSoftware {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/mobileapp" render={(props) => <MobileApp {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/websites" render={(props) => <Websites {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/revolution" render={(props) => <Revolution {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/about" render={(props) => <About {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/contact" render={(props) => <Contact {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
          <Route exact path="/estimate" render={(props) => <Estimate {...props} setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>}></Route>
        </Switch>
        <Footer setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>
      </BrowserRouter>
      
    </ThemeProvider>
  );
} 

export default App;
