import React from "react";
import classes from "./FilterByItem.css";
import arrow from "../../../assets/images/drop-down-arrow.png"
const filterbyItem=props=>{
    
    return(<div className={classes.FilterByItem}><li style={props.itemClickedType===props.type?{backgroundColor:"white"}:null} onClick={props.clicked}>
        <span >{props.type}
        </span>
        <img  style={{marginLeft:"5px",width:"7px",height:"10px"}} src={arrow} alt="arrow"></img>        
            </li>
            </div>);
    
}

export default filterbyItem;