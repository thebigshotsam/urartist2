import React,{Component} from "react";
import classes from "./FilterByItems.css";
import FilterByItem from "../FilterByItem/FilterByItem";
import cross from "../../../assets/images/remove.png";

class filterbyItems extends Component{
    state={
        filters:[
        {
            
            type:"Categories",
            lists:[
                {
                    type:"Architecture",
                    value:1
                },
                {
                    type:"Arts & Illustration",
                    value:1
                },
                {
                    type:"Events",
                    value:1
                },
                {
                    type:"Fashion",
                    value:1
                },
                {
                    type:"Vintage",
                    value:1
                }
            ]
        },
        {
            type:"Countries",
            lists:[
                {
                    type:"Architecture",
                    value:1
                },
                {
                    type:"Arts & Illustration",
                    value:1
                },
                {
                    type:"Events",
                    value:1
                },
                {
                    type:"Fashion",
                    value:1
                },
                {
                    type:"Vintage",
                    value:1
                }
            ]
       },
        {
            type:"Technologies",
            lists:[
                {
                    type:"Architecture",
                    value:1
                },
                {
                    type:"Arts & Illustration",
                    value:1
                },
                {
                    type:"Events",
                    value:1
                },
                {
                    type:"Fashion",
                    value:1
                },
                {
                    type:"Vintage",
                    value:1
                }
            ]
        },
        {
            type:"Colors",
            lists:[
                {
                    type:"Architecture",
                    value:1
                },
                {
                    type:"Arts & Illustration",
                    value:1
                },
                {
                    type:"Events",
                    value:1
                },
                {
                    type:"Fashion",
                    value:1
                },
                {
                    type:"Vintage",
                    value:1
                }
            ]
        }
    ],
    itemClicked:false,
    itemType:null,
    itemSelected:null
}
    listOnClicked=(type)=>{
        this.setState({itemClicked:true});
        for(let i of this.state.filters){
            if(i.type === type){
                console.log(i.lists)
                this.setState({itemSelected:[...i.lists],itemType:type})
            }
        }
    }
    listOnClose=(type)=>{
        this.setState({itemClicked:false,itemType:null});
       
    }
    render(){
        
        return <div className={classes.box_filters}>
            <div className={classes.container}>
                <div className={classes.box_left}>
                    <ul className={classes.ul}>
                        <li className={classes.item}><strong>Filter By</strong></li>
                        {this.state.filters.map(i=>{
                            return <FilterByItem  clicked={()=>this.listOnClicked(i.type)} itemClickedType={this.state.itemType} type={i.type} lists={i.lists}/>
                        })}
                    </ul>
                </div>
            </div>
            {this.state.itemClicked?<div className={classes.box_filters_content}>
                <div style={{marginLeft:"3%"}} className={classes.container2}>
                   <span>Order ->  {this.state.itemType}</span>
                    <img style={{marginLeft:"83%",position:"fixed"}} onClick={this.listOnClose} src={cross} className={classes.cross} alt="cross"></img>
                </div>
                
                <div className={classes.inner}>
                    <ul  className={classes.list_tags} >
                        {this.state.itemSelected.map(i=>{
                            return <li>
                                        <strong>
                                            <a className={classes.item}>{i.type}</a>
                                        </strong>
                            </li>})}
                     </ul>
                </div>
                </div>:null}
        </div>
        
    }
}

export default filterbyItems;