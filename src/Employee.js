import React from 'react';
import "./App.css";
import {useHistory} from "react-router-dom";
import { Switch, Route} from "react-router-dom";
import Home1 from "./Home1";
import {Redirect} from 'react-router';



function Employee() {

    // const history = useHistory();
    // const navigateTo = () => history.push('./Home1');

    return (
        <div className="Employee">
            <Redirect to = './Home1' /> 
            
            {/* <button onClick = {navigateTo} type = "button"> Click Here</button> */}
             {/* <Switch>
                <Route exact path = "/Home1" component={Home1} />
            </Switch>  */}
        </div>
        
    )
}

export default Employee;


