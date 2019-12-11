import React ,{Component} from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
class nav_Items extends Component{

    render(){
    return <ul className={classes.NavigationItems}>
       <NavigationItem link="/" exact>Posts</NavigationItem>
       <NavigationItem link="/orders">events</NavigationItem>
       <NavigationItem  link="/logOut">Logout</NavigationItem>
       <NavigationItem  link="/user">User</NavigationItem>
    </ul>
    }
}


export default nav_Items;