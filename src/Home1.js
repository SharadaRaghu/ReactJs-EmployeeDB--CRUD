import React,  {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from "react-redux";
import { deleteUser, loadUsers } from './redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import AddUser from './pages/AddUser';
import { useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { grid } from '@material-ui/system';


const useButtonStyles = makeStyles((theme) => ({
  root : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    color : 'blue',
    
    '& > *' : {
      margin : theme.spacing(1),
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.common.white
    },
    
  },
}));



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const useStyles = makeStyles ({
      table : {
          marginTop  : 100,
          minWidth : 900,
          backgroundColor: 'orange',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      },
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      }
  });

  


const Home1 = () => {
    const classes = useStyles();
    const buttonStyles = useButtonStyles();
    const history = useHistory();
    let dispatch = useDispatch();
    
    const {users} = useSelector (state => state.data)
    useEffect(() => {
      dispatch(loadUsers());

    }, [dispatch] );

    const handleDelete = (id) => {
      if(window.confirm("Are you sure, if you want to delete this user")){
        dispatch(deleteUser(id));
        
      }

    }

    
    return (
        <div>
          
          <div className = {buttonStyles.root}>
            {/* <Link to ="/pages/AddUser" className="btn btn-primary">Add Employee</Link> */}
           <Button variant ="contained" color="primary" onClick = {() =>history.push("/pages/AddUser")}>Create Employee</Button> 
          </div>
          <br/>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Details :</TableCell> 
            <TableCell align="center">Employee Name</TableCell>
            <TableCell align="center">Employee Salary</TableCell>
            <TableCell align="center">Employee Age</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align ="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow
             
              key={user.id}
              align={user.align}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             
            >
                

              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              
              
              <TableCell align="center">{user.employee_name}</TableCell>
              <TableCell align="center">{user.employee_salary}</TableCell>
              <TableCell align="center">{user.employee_age}</TableCell>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align = "center">
             
              <ButtonGroup
               variant="contained"
               aria-label="outlined button group">
              <Button style = {{marginRight : "5px" }} 
               color="secondary" onClick={() => handleDelete(user.id)} >
                 
                Delete
                </Button>
              <Button color="primary" 
              onClick={() => history.push(`pages/EditUser/${user.id}`)}
              >Edit</Button>
              </ButtonGroup>
              

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    <div className="paginate">

      {/* <ReactPaginate
      previousLabel = { "Previous"}
      nextLabel = { "Next"}
      breakLabel = {"..."}
      pageCount = {pageCount}
      onPageChange = { handlePageClick}
      breakClassName = {'page-item'}
      breakLinkClassName = {'page-link'}
      containerClassName = {'pagination'}
      pageClassName = {'page-item'}
      pageLinkClassName = {'page-link'}
      previousClassName = {'page-item'}
      nextClassName = {'page-item'}
      nextLinkClassName = {'page-link' }
      activeClassName = {'active'}
      /> */}
    </div>
     </div> 
    )
}      


export default Home1;
