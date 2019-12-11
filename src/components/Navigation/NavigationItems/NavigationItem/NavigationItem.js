import React from "react";
import classes from "./NavigationItem.css";
import {NavLink} from "react-router-dom";

const nav_Item=(props)=>{
    return <li className={classes.NavigationItem} >
        <NavLink onClick={props.clicked}  exact={props.exact}  activeClassName={classes.active}
        to={props.link}>{props.children}</NavLink>
        </li>
};

export default nav_Item;