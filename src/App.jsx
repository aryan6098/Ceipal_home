import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import EssNav from "./components/EssNav";
import RequestDetails from "./components/ESS/RequestDetails";
import WorkList from "./components/WorkList";
import Timesheet from "./components/Timesheet";

function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/essnav" component={EssNav}></Route>

        <Route exact path="/worklist" component={WorkList}></Route>

        <Route exact path="/timesheet" component={Timesheet}></Route>

        <Route exact path="/requestdetails" component={RequestDetails}></Route>
      </Switch> 

      <Footer />

      {/* <Home2/> */}
    </>
  );
}

export default App;
