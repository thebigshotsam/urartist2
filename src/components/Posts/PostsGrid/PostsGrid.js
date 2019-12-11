import React,{Component} from "react";
import PostItems from "../PostItems/PostItems";
import classes from "./PostsGrid.css";
import FilterByItems from "../../FilterBy/FilterByItems/FilterByItems";
import Aux from "../../../hoc/Auxiliary";

class PostGrid extends Component{
    render(){
        return <Aux>
        <FilterByItems/>
                <div>
                <h2 className={classes.Post}>Posts</h2>
                <div className={classes.grid}>
                    <PostItems />
                </div> 
            </div>
            </Aux>
    }
}
export default PostGrid;