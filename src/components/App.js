import React,{useState} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import theme from './ui/theme'
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'


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
          <Route exact path="/customsoftware" component={() => <div>customsoftware</div>}></Route>
          <Route exact path="/mobileapp" component={() => <div>mobileapp</div>}></Route>
          <Route exact path="/websites" component={() => <div>websites</div>}></Route>
          <Route exact path="/revolution" component={() => <div>revolution</div>}></Route>
          <Route exact path="/about" component={() => <div>about</div>}></Route>
          <Route exact path="/contact" component={() => <div>contact</div>}></Route>
          <Route exact path="/estimate" component={() => <div>estimate</div>}></Route>
        </Switch>
        <Footer setValue={setValue} setMenuItemSelected={setMenuItemSelected}/>
      </BrowserRouter>
      
    </ThemeProvider>
  );
} 

export default App;
