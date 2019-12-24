import React,{Component} from "react";
import classes from "./Upload.css";
import cloud from "../../assets/images/cloud_upload_grey_192x192.png";
import Aux from "../../hoc/Auxiliary";
import * as postActions from "../../Store/Actions/post";
import {connect} from "react-redux";
class Upload extends Component{
    constructor(props)
    {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
    }
    state =  {
        selectedFile: null,
        imagePreviewUrl: null,
        title:null,
        description:null,
        tags:[]
      }
     handleFileSelect = (e) => {
        e.preventDefault();
        let file=e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
        this.setState({
            selectedFile:file,
            imagePreviewUrl: reader.result
      });
        }
        reader.readAsDataURL(file);
    }
    onChangeEventHandler=(event,ele)=>{
        if(ele === "title"){
            this.setState({title:event.target.value});
        }
        if(ele === "description"){
            this.setState({description:event.target.value});
        }
        
    }
     onSubmitHandler = () => {
 
        const fd = new FormData();
        fd.append("image",this.state.selectedFile);
        fd.append("title",this.state.title);
        fd.append("content",this.state.description);
        this.props.onSubmit(fd);
    }
     
    render(){
        return <Aux><main className={classes.upload_flow_main}>
        <div className={classes.main_content}>
            <div className={classes.upload_viewer}>
                <div className={classes.drag_drop_container}>
                    <div className={classes.drop_area_main}>
                    {this.state.imagePreviewUrl?<img style={{width:"100%"}} src={this.state.imagePreviewUrl} alt="imh"></img>:
                        <div className={classes.drop_area_main_content}>
                            <div className={classes.cloud_container}>
                            
                               <div><svg className={classes.upload_shot_cloud} width="161" height="121" viewBox="0 0 161 121" svg-inline="" role="presentation" focusable="false" tabindex="-1">
                                <path d="M127.452 47.224C127.458 21.067 106.434 0 80.5 0 54.566 0 33.542 21.067 33.542 47.056 14.745 48.918 0 64.742 0 84.028 0 104.45 16.516 121 36.896 121h87.208C144.484 121 161 104.45 161 84.028c0-19.286-14.745-35.11-33.548-36.804z">
                                </path>
                            </svg>
                            <div className={classes.cloud_arrow_container}>
                                <svg height="48" viewBox="0 0 75 48" width="75" svg-inline="" role="presentation" focusable="false" tabindex="-1" >
                                    <path d="M24 47.111H6.736c-5.978 0-8.97-7.24-4.743-11.475L37.5.056l35.507 35.58c4.226 4.235 1.235 11.475-4.743 11.475H50.995z">
                                    </path>
                                </svg>
                                <div className={classes.cloud_arrow_container_after}></div>
                            </div>
                            </div>
                            </div>
                            <h1>Click Choose file to drop an image</h1>
                            <p>or <input  type="file" title="Bro"  onChange={this.handleFileSelect} style={{display:""}}/>
                               to choose a file
                                <span className={classes.min_requirements}>
                                (1600×1200 or larger recommended,
                                <span style={{display:"inline-block"}}>up to 10MB each)
                                </span>
                                </span>
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={classes.upload_details}>
            <div>
                <form >
                    <div className={classes.form_field}>
                        <div >
                            <label className={classes.label}>Title</label>
                             <span className={classes.dd_input_wrap}>
                                 <input onChange={(event)=>this.onChangeEventHandler(event,"title")} value={this.state.title} type="text" placeholder="Add a Title" maxlength="64" className={classes.dd_input}>
                                     </input> 
                             </span>
                        </div>
                    </div> 
            {/* <div className={classes.form_field}>
                <div >
                    <label className={classes.label}>
                        Tags
                        <svg className={[classes.circle_help,classes.icon_16,classes.nudge_down_2,classes.nudge_right_2].join(" ")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" data-tippy="" data-original-title="Start typing tags. Hit tab, comma, or return to complete. Hit backspace/delete to remove.">
                            <path 
                                fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                            </path>
                        </svg>
                    </label> 
                        <div>
                            <input type="text" tabindex="-1" value="" className={classes.dd_input} style={{display:""}}>
                                </input>
                            
                            </div>
                </div>
                </div>  */}
                        {/* <div className={classes.suggested_tag_wrapper}>
                            <p className={[classes.pt20,classes.text_uppercase,classes.text_size_12,classes.text_medium,classes.text_weight_500,classes.lh_copy].join(" ")}>
                        Suggested Tags
                        <svg className={[classes.circle_help,classes.icon_16,classes.nudge_down_2,classes.nudge_right_2].join(" ")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" data-tippy="" data-original-title="These tags are recommended based on your tag history and popular tags across Dribbble.">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                            </path>
                        </svg>
                        </p>
                        <ul className={[classes.inline_flex,classes.flex_wrap,classes.lh_copy,classes.suggested_tag_list].join(" ")}>
                            <li className={classes.text_size_14}>
                                <a href="/">
                                    illustration
                                </a>
                            </li>
                        <li className={classes.text_size_14}>
                            <a href="/">
                        design
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        logo
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        ui
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        vector
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        branding
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        typography
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        ux
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        icon
                    </a></li>
                    <li className={classes.text_size_14}><a href="/">
                        app
                    </a></li>
                    </ul>
                </div> */}
                <div className={classes.form_field}>
                    <div >
                        <label className={classes.label}>
                        Description
                    <svg className={[classes.circle_help,classes.icon_16,classes.nudge_down_2,classes.nudge_right_2].join(" ")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabindex="-1" data-tippy="" data-original-title="URLs are automatically hyperlinked. Line breaks and paragraphs are automatically generated. a, em, strong and code tags are accepted.">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.332 1.968h-2.24c0-1.344.336-1.984 1.216-2.72.175-.152.366-.292.554-.43.584-.427 1.142-.836 1.142-1.538 0-.736-.64-1.2-1.52-1.2-1.088 0-1.808.752-1.824 1.744H7.5C7.564 7.68 9.148 6 11.916 6c2.496 0 4.064 1.28 4.064 3.216 0 1.2-.56 1.936-1.184 2.432-.382.297-.71.519-.988.706-.35.236-.617.417-.804.622-.256.288-.32.528-.336.992zm-2.576 2.816c0-.8.608-1.424 1.424-1.424s1.424.624 1.424 1.424c0 .8-.608 1.424-1.424 1.424a1.397 1.397 0 01-1.424-1.424z" fill="0">
                        </path>
                    </svg>
                      </label> 
                    <textarea onChange={(event)=>this.onChangeEventHandler(event,"description")} value={this.state.description} placeholder="Tell us about your process and how you arrived at this design." className={classes.dd_input}>
                    </textarea>
                    </div>
                </div>
                 <div className={[classes.form_field,classes.check_wrap].join(" ")}>
                    <h3 className={classes.title_mimics_label}>Settings
                    </h3> 
                    <div >
                        <label className={classes.label}>
                            <input type="checkbox"></input>
                        </label>
                    </div>
                </div> 
            </form>
            </div>
        </div>
        </div>
    </main>
    <footer role="banner" className={classes.upload_flow_footer}>
        <div className={classes.footer_actions_left}>
          <a style={{textDecoration:"none"}} href="" className={[classes.dd_btn,classes.dd_btn_tertiary].join(" ")}>Cancel</a>                          
        </div>
        <div onClick={this.onSubmitHandler} className={classes.footer_actions_right}>
            <a className={[classes.dd_btn2,classes.dd_btn_tertiary].join(" ")}>
                <span>Publish to Draft</span>
            </a>
        </div>
    </footer>
    </Aux>
    }
    
}

const mapDispatchtoProps=dispatch=>{
    return {
        onSubmit:(formData)=>dispatch(postActions.onCreatePost(formData))
    }
}
export default connect(null,mapDispatchtoProps)(Upload);
