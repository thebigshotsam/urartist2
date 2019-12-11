import React,{Component} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Auxiliary";
import Auth from "../../containers/Auth/Auth";
import classes from "./Layout.css";

class Layout extends Component{
  state={
    loginBtn:false
  }
  loginBtnClicked=()=>{
    this.setState({loginBtn:true})
  }
  backdropClicked=()=>{
    this.setState({loginBtn:false})
  }
    render(){
        return <Aux >
            <Toolbar clicked={this.loginBtnClicked} />
            <main className={classes.Content}>
              {this.props.children}
            </main>
            {this.state.loginBtn?<Auth back={this.backdropClicked} />:null}
            </Aux>
    }
}

export default Layout;