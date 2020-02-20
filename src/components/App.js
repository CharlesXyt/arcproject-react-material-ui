import React from 'react';
import {ThemeProvider} from '@material-ui/styles'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import theme from './ui/theme'
import Header from './ui/Header'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div>home</div>}></Route>
          <Route exact path="/services" component={() => <div>services</div>}></Route>
          <Route exact path="/customsoftware" component={() => <div>customsoftware</div>}></Route>
          <Route exact path="/mobileapp" component={() => <div>mobileapp</div>}></Route>
          <Route exact path="/websites" component={() => <div>websites</div>}></Route>
          <Route exact path="/revolution" component={() => <div>revolution</div>}></Route>
          <Route exact path="/about" component={() => <div>about</div>}></Route>
          <Route exact path="/contact" component={() => <div>contact</div>}></Route>
          <Route exact path="/estimate" component={() => <div>estimate</div>}></Route>

        </Switch>
      </BrowserRouter>
      
    </ThemeProvider>
  );
} 

export default App;
