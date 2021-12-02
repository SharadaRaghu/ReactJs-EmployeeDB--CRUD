import React , {useState} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Employee from "./Employee";
import Home1 from "./Home1";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <br/>
        <h2><i>💼Welcome To EmployeePlus💼 </i></h2>
        <br/>
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path = '/Employee' component={Employee} />
          <Route exact path = '/Home1' component = {Home1}/>
          
          <Route exact path = '/pages/AddUser' component = {AddUser} />
          <Route exact path = '/pages/EditUser/:id' component = {EditUser} />
          
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
