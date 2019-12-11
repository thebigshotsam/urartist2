import React ,{Component} from "react";
import {NavLink} from "react-router-dom"
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import cloudIcon from "../../../assets/images/cloud_upload_grey_192x192.png"
class nav_Items extends Component{

    render(){
    return <ul className={classes.NavigationItems}>
        <NavLink to="/upload"  className={classes.form_btn}>
            <img  style={{width:"20px", height:"20px"}} alt="cloud"src={cloudIcon} className={classes.cloud_icon}/>
           <span style={{marginLeft:"2px"}}>Upload</span>
        </NavLink >
       <NavigationItem clicked={this.props.clicked} link="" >Sign In</NavigationItem>
        </ul>
    }
}


export default nav_Items;