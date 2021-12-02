import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClassNames } from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addUser } from '../redux/actions';


const AddUser = () => {
    const [state, setState] = useState({
        id: "",
        employee_name : "",
        employee_salary : "",
        employee_age : ""
    });

    const [error, setError] = useState("")

    let history = useHistory();

    let dispatch = useDispatch();

    const {id, employee_name, employee_salary, employee_age} = state;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState ({...state, [name] : value});
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        if (!id || !employee_name || !employee_salary || !employee_age){
            setError("Please provide input to all fields")
        }
        else{
            dispatch(addUser(state));
            history.push("/Home1");
            setError("");
        }

    }
    return (
        <div>
            <Button style={{width : "100px" , marginTop : "20px"}}
             variant ="contained" 
             color="secondary" 
             onClick = {() =>history.push("/Home1")}
             > Go Back </Button>
            <h2>Add a New Employee</h2>
            {error && <h3 style ={{color : "red"}}>{error}</h3>}
            <form className = {ClassNames.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="standard-basic"
            label="ID"
            value={id} 
            type="number"
            name = "id"
            onChange = {handleInputChange}/>
           <br/>
           <br/> 
           <TextField id="standard-basic" 
           label="Employee Name" 
           value={employee_name} 
           type="text" 
           name = "employee_name"
           onChange = {handleInputChange}/>
           <br/>
           <br/>
           <TextField id="standard-basic" 
           label="Employee Salary" 
           value={employee_salary} 
           type="number"
           name="employee_salary"
           onChange = {handleInputChange} />
           <br/>
           <br/>
           <TextField id="standard-basic" 
           label="Employee Age"  
           value={employee_age} 
           type="number"
           name="employee_age"
           onChange = {handleInputChange}/>
           <br/>
           <br/>
           
           <Button style={{width : "100px"}} 
           variant ="contained" 
           color="primary" 
           type="submit"
           onChange = {handleInputChange}
           > Submit </Button> 
    
            </form>
        </div>
    )
}

export default AddUser
