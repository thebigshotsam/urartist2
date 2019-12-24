import React,{Component} from "react";
import PostItems from "../PostItems/PostItems";
import classes from "./PostsGrid.css";
import FilterByItems from "../../FilterBy/FilterByItems/FilterByItems";
import Aux from "../../../hoc/Auxiliary";
import Axios from "axios";
import * as postActions from "../../../Store/Actions/post.js";
import {connect} from "react-redux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";
class PostGrid extends Component{
    state={
        loading:true,
        error:false
    }
    PostOnCLicked=(postId)=>{
        this.props.onViewPost(postId);
    }
    componentDidMount(){
    //     Axios.get("http://localhost:8080/posts")
    // .then(res=>{
    //     console.log(res.data.posts);
    //     this.setState({
    //         posts:res.data.posts
    //     });
    // })
    // .catch(err=>{
    //     console.log(err);
    //     throw err;
    // });
    setInterval(()=>{
        this.props.onGetPosts();
        this.setState({loading:false})
    },1000);
    }
    render(){
        let posts=this.props.posts;
        console.log(posts);
        let aux=<Aux>
        <FilterByItems/>
                <div>
                <h2 className={classes.Post}>Posts</h2>
                <div className={classes.grid}>
                    {posts.map(post => {
                    return <PostItems title={post.title} content={post.content} imageUrl={post.imageUrl} likes={post.likes}
                               views={post.views}  />
                    })}
                </div> 
            </div>
            </Aux>;
            
        if(this.state.loading)
        {
            aux=<Aux><Backdrop show={true} />
                <Spinner />
            </Aux>;
        }
        return aux;
    }
}
const mapStatetoProps=state=>{
    return{
        posts:state.postReducer.posts,
        post:state.postReducer.post,
        loading:state.postReducer.loading
    }
}
const mapDispatchtoProps=dispatch=>{
    return {
        onGetPosts:()=>dispatch(postActions.onGetPosts()),
        onViewPost:(postId)=>dispatch(postActions.onGetPost(postId))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(PostGrid);