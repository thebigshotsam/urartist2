import React,{Component} from "react";
import classes from "./PostItems.css";
import Logo from "../../../assets/images/City_Landscape_Background.jpg";
import heartLogo from "../../../assets/images/heart-69-512.png";
import viewsLogo from "../../../assets/images/eye.png";

class PostItems extends Component{
    render(){
        const url="http://localhost:8080/"+this.props.imageUrl;
        return <article class={[classes.card,classes.Post].join(" ")}>
             
        <div className={classes.card__image}>
        <div className={classes.zoom}>
            <img src={url}
                alt="Logo" />
           </div>
           <div style={{marginLeft:"45%",marginRight:"2px"}}>
           <a className={classes.form_btn}>
            <img   alt="heart"src={heartLogo} className={classes.heart_icon}/>
           <span style={{marginLeft:"2px"}}>Like</span>
        </a >
        <a className={classes.form_btn}>
            save
        </a>
        </div>
        <div style={{marginTop:"35%",marginLeft:"70%",marginRight:"2px"}}>
        <a  className={classes.form_btn}>
            <img  style={{width:"23px"}} alt="heart"src={viewsLogo} className={classes.heart_icon}/>
           <span style={{marginLeft:"2px"}}>8</span>
        </a >
        </div>
        </div>
        <div className={classes.card__content}>
            <div className={classes.row}><h3 >source</h3></div>
            <div className={classes.content}>
            <div className={classes.left} style={{fontFamily:"apercu,sans-serif",color:"#202121",fontWeight:"300",fontSize:"10pt"}}>From Italy</div>
            <div className={classes.right} style={{fontFamily:"apercu,sans-serif",color:"#202121",fontWeight:"300",fontSize:"10pt"}}>October 19</div>
            </div>
            <div className={classes.footer}/>
            <div className={classes.bottom}>
                <div>
                    <img   className={classes.img} alt="im" src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/474054/5bfd0241750e8.jpg"
                    width="27" height="27"></img>
                </div>
                <div className={classes.by}>
                    <strong>By Richard Monique</strong>
                </div>
            </div>
            </div>
            
        
        </article>
    }
}
export default PostItems;