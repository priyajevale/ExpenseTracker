import classes from './MainNavigation.module.css';
import React from 'react';
import {Link} from 'react-router-dom';
const MainNavigation =() =>{
    return(
<header className={classes.header}>
<Link to='/'>
    <div className={classes.logo}>My Web Link</div>
    </Link>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/home'> Home</Link>
                </li>
                <li>
                    <Link to='/product'> Product</Link>
                </li>
                <li>
                    <Link to='/aboutus'> About Us</Link>
                </li>
            </ul>
        </nav>
    </div>
</header>

        
    )
};
export default MainNavigation;