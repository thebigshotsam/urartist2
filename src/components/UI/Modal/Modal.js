import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
 const modal=(props)=>{
     return <Aux>
         <Backdrop show={true} clicked={props.clicked}/>
         <div className={classes.Modal}>         
         {props.children}
     </div>
     </Aux>
 };
 export default modal;