import React,{Component} from "react";

class Child extends Component{

    render(){
        return(
        <div>
            <h1>{this.props.fruit}</h1>
            <h1>{this.props.children}</h1>
        </div>

    );

    }
}

export default Child;