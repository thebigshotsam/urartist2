import React ,{Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./Auth.css"
import facebook from "../../assets/images/facebook-512.png";
import Twitter from "../../assets/images/twitter-512.png";
import Google from "../../assets/images/icons8-google-480.png";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "tls";

 class Auth extends Component{
     state={
         registerBtn:false
     }
     registerBtnClikced=()=>{
         const set=!this.state.registerBtn;
         this.setState({registerBtn:set});
     }
     render(){
         let form=<div className={classes.Light_Box}>
         <div className={classes.Box_login}>
     <div className={classes.form}>
              <div className={classes.box_section}>
               <div className={classes.header}>
                   <div>
                       <h3><span style={{color:"rgb(26,27,25)"}}>Sign in to Continue</span></h3>
                   </div>
                   <div>
                       <h3 style={{color:"rgb(120,122,122)"}}><span>Not a member yet?</span ><span onClick={this.registerBtnClikced}  style={{color:"#49c5b6",cursor:"pointer"}}>Register Here</span ></h3>
                   </div>
               </div>
               <form  onSubmit="">
                   
                       <p>
                       <label className={classes.tip_form}>
                       <input className={classes.text_input} placeholder="Email or Username" type="text"></input>
                       </label>
                       </p>
                   
                   <p>
                       <label className={classes.tip_form}>
                       <input className={classes.text_input} placeholder="Password" type="password"></input>
                       </label>
                   </p>
                   <p className={classes.check}>
                       <input id="remember_me" name="_remember_me" type="checkbox"></input>
                       <label for="remember_me">Keep me logged in</label>
                   </p>
                   <p>
                       <label className={classes.tip_form}>
                           <button className={classes.button} type="submit">
                               <span>LOGIN NOW</span>
                           </button>
                       </label>
                   </p>
                   <p >
                       <span  > 
                           <a className={classes.link_2} href="/forgot-password">Forgot your password</a>
                       </span >
                   </p>
               </form>
              </div>
              <div className={classes.box_section}>
                   <div className={classes.header}>
                       <h3><strong>Or sign in with</strong></h3>
                   </div>
                   <div className={classes.bts}>
                       <a className={[classes.bt_connect,classes.google].join(" ")}>
                           <img src={Google} className={classes.ico_svg} alt="google"></img>
                           <span>Google</span>
                       </a>
                       <a className={[classes.bt_connect,classes.bt_twitter].join(" ")}>
                           <img src={Twitter} className={classes.ico_svg} alt="twitter"></img>
                           <span>Twitter</span>
                       </a>
                       <a className={[classes.bt_connect,classes.bt_facebook].join(" ")}>
                           <img src={facebook} className={classes.ico_svg} alt="facebook"></img>
                           <span>Facebook</span>
                       </a>
                   </div>
              </div>
              </div > 
              </div>
              </div>
              if(this.state.registerBtn){
                  form=<div className={classes.Light_Box}>
                  <div className={classes.Box_login}>
              <div className={classes.form}>
                       <div className={classes.box_section}>
                        <div className={classes.header}>
                            <div>
                                <h3><span style={{color:"rgb(26,27,25)"}}>Register with</span></h3>
                            </div>
                            <div>
                                <h3 style={{color:"rgb(120,122,122)"}}><span>Are you a member?</span ><span onClick={this.registerBtnClikced}  style={{color:"#49c5b6",cursor:"pointer"}}>Login Now</span ></h3>
                            </div>
                        </div>
                         <div className={classes.bts}>
                                <a className={[classes.bt_connect,classes.google].join(" ")}>
                                    <img src={Google} className={classes.ico_svg} alt="google"></img>
                                    <span>Google</span>
                                </a>
                                <a className={[classes.bt_connect,classes.bt_twitter].join(" ")}>
                                    <img src={Twitter} className={classes.ico_svg} alt="twitter"></img>
                                    <span>Twitter</span>
                                </a>
                                <a className={[classes.bt_connect,classes.bt_facebook].join(" ")}>
                                    <img src={facebook} className={classes.ico_svg} alt="facebook"></img>
                                    <span>Facebook</span>
                                </a>
                            </div>
                            <div className={classes.header}>
                                <h3><strong>Or sign in with</strong></h3>
                            </div>
                       </div>
                        <form  onSubmit="">
                            
                                <p>
                                <label className={classes.tip_form}>
                                <input className={classes.text_input} placeholder="Username" type="text"></input>
                                </label>
                                </p>
                                <p>
                                <label className={classes.tip_form}>
                                <input className={classes.text_input} placeholder="Email " type="email"></input>
                                </label>
                                </p>
                            
                            <p>
                                <label className={classes.tip_form}>
                                <input className={classes.text_input} placeholder="Password" type="password"></input>
                                </label>
                            </p>
                            <p>
                                <label className={classes.tip_form}>
                                <input className={classes.text_input}  placeholder="Repeat Password" type="password"></input>
                                </label>
                            </p>
                            <p className={classes.check}>
                                <input id="remember_me" name="_remember_me" type="checkbox"></input>
                                <label for="remember_me">I accept the terms and condotions</label>
                            </p>
                            <p>
                                <label className={classes.tip_form}>
                                    <button className={classes.button} type="submit">
                                        <span>REGISTER NOW</span>
                                    </button>
                                </label>
                            </p>
                           
                        </form>
                       </div>
                       
                       </div > 
                       </div>
                       
              }
          return <div style={{overflowY:"auto"}}>
              
              <Modal  clicked={this.props.back}>
                {form}               
            </Modal>
            
            </div>;
     
 }
}

 export default Auth;