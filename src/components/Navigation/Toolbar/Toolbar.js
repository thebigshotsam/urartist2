import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItems2 from "../NavigationItems/NavigationItems2";

const toolbar =(props)=>{
   return <header className={classes.Toolbar}>
            <div ><p style={{color:"white",
            fontFamily:"'Pacifico', 'cursive'",
            fontSize:"20pt",
            marginRight:"30px"}}>UrArtist</p></div>
            <br></br>
            <nav className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
        <nav style={{marginLeft:"65%" ,position:"absolute"}} className={classes.DesktopOnly}>
        <NavigationItems2 clicked={props.clicked}/>
        </nav>
    
        <div style={{marginLeft:"50%"}} className={classes.Search}>
        <span className={[classes.Search,classes.fa].join(" ")}></span>
        <input  onChange={props.changed} placeholder="Search term" value={props.value} />
        </div>
        </header>;
};

export default toolbar;