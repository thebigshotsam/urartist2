import React,{Component} from "react";
import PostItems from "../PostItems/PostItems";
import classes from "./PostsGrid.css";
import FilterByItems from "../../FilterBy/FilterByItems/FilterByItems";
import Aux from "../../../hoc/Auxiliary";
import Axios from "axios"
class PostGrid extends Component{
    PostOnCLicked=(postId)=>{
        this.props
    }
    render(){
        let posts=[];
        Axios.get("http://localhost:8080/getPosts")
        .then(res=>{
            if(res.status === 200){
                posts=res.posts;
            }
        })
        .catch(err=>{
            console.log(err);
        })
        return <Aux>
        <FilterByItems/>
                <div>
                <h2 className={classes.Post}>Posts</h2>
                <div className={classes.grid}>
                    {posts.map(post => {
                    return <PostItems title={post.title} content={post.content} imageUrl={post.imageUrl} likes={post.likes}
                               views={post.views} createdAt={post.createdAt.toISOString() }  />
                    })}
                </div> 
            </div>
            </Aux>
    }
}
export default PostGrid;