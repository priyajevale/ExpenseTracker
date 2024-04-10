
import React from 'react';
import classes from './Dashboard.module.css';
import {useNavigate} from 'react-router-dom';
const Dashboard = () =>{
    const navigate=useNavigate();
    const switchAuthModeHandler = () =>{
        navigate('/user');
    }
    return(
        <div className={classes.dash}>
            Welcome to expense Tracker
            <span> Your profile is incomplete <button onClick={switchAuthModeHandler}>Complete Now</button></span>
        </div>
    )
};
export default Dashboard;