import classes from './MainNavigation.module.css';
import React,{useContext}  from 'react';
import {NavLink} from 'react-router-dom';
 import AuthContext from '../Store/AuthContext';
const MainNavigation =() =>{
    const authctx=useContext(AuthContext);
    //const isSignedUp = authctx.isSignedup;
    return(
<header className={classes.header}>
<NavLink to='/authform'>
    <div className={classes.logo}>My Web Link</div>
    </NavLink>
    <div>
        <nav>
            <ul>
                 <li>
                    <NavLink to='/Home'> Home</NavLink>
                </li>
               
               <li>
                    <NavLink to="/login"> Login</NavLink>
                </li>
                <li>
                    <NavLink to='/product'> Product</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutus'> About Us</NavLink>
                </li>
            </ul>
        </nav>
    </div>
</header>

        
    )
};
export default MainNavigation;