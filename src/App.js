import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { BrowserRouter, Route } from "react-router-dom";
import {makeStyles } from '@material-ui/core';


function App() {
 
  const classes = useStyles();


  return (
   
      <BrowserRouter>
      
       <div className={classes.App}> 
          <Header />
          <Route path="/" component={HomePage} exact /> 
          <Route path="/coins/:id" component={CoinPage} exact/>
        </div>
      </BrowserRouter>
    
  );
}

export default App;

const useStyles = makeStyles(() => ({
  App: {
    // backgroundColor: "#14161a",
    background: "linear-gradient(90deg, rgba(5,4,20,1) 0%, rgba(19,49,113,1) 100%)",
    color: "white",
    minHeight: "100vh",
  },
}));

